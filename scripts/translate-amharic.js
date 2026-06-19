import { readFileSync, writeFileSync } from 'node:fs'
import process from 'node:process'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const SRC = resolve(ROOT, 'src/locales/en/translation.json')
const TGT = resolve(ROOT, 'src/locales/am/translation.json')

function flatten(obj, prefix = '') {
  let result = {}
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(result, flatten(v, key))
    } else if (Array.isArray(v)) {
      result[key] = JSON.stringify(v)
    } else {
      result[key] = v
    }
  }
  return result
}

function unflatten(map) {
  const root = {}
  for (const [key, value] of Object.entries(map)) {
    const parts = key.split('.')
    let current = root
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i]
      if (!(part in current)) current[part] = {}
      current = current[part]
    }
    const last = parts[parts.length - 1]
    try { current[last] = JSON.parse(value) } catch { current[last] = value }
  }
  return root
}

function needsTranslation(val, key) {
  if (!val) return true
  return val === key
}

async function translate(text, apiKey) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, target: 'am', format: 'text' }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error?.message || `HTTP ${res.status}`)
  return data.data.translations[0].translatedText
}

async function main() {
  const enRaw = JSON.parse(readFileSync(SRC, 'utf-8'))
  const amRaw = JSON.parse(readFileSync(TGT, 'utf-8'))

  const enFlat = flatten(enRaw)
  const amFlat = flatten(amRaw)

  const missing = {}
  for (const [key, val] of Object.entries(enFlat)) {
    if (needsTranslation(amFlat[key], key)) {
      missing[key] = val
    }
  }

  const missingKeys = Object.keys(missing)
  if (missingKeys.length === 0) {
    console.log('No missing translations found.')
    return
  }

  console.log(`Found ${missingKeys.length} key(s) needing translation:\n`)
  for (const key of missingKeys) {
    console.log(`  ${key} → "${missing[key]}"`)
  }

  const apiKey = process.env.GOOGLE_API_KEY
  if (!apiKey) {
    console.log('\nSet GOOGLE_API_KEY to auto-translate. Skipping API call.')
    return
  }

  console.log(`\nTranslating ${missingKeys.length} value(s) via Google Translate...`)
  for (const [key, val] of Object.entries(missing)) {
    try {
      const translated = await translate(val, apiKey)
      amFlat[key] = translated
      console.log(`  ✓ ${key} → "${translated}"`)
    } catch (err) {
      console.error(`  ✗ ${key}: ${err.message}`)
    }
  }

  const merged = unflatten(amFlat)
  const existing = JSON.parse(readFileSync(TGT, 'utf-8'))

  function deepMerge(target, source) {
    for (const [k, v] of Object.entries(source)) {
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        if (!(k in target)) target[k] = {}
        deepMerge(target[k], v)
      } else {
        target[k] = v
      }
    }
  }

  deepMerge(existing, merged)
  writeFileSync(TGT, JSON.stringify(existing, null, 2) + '\n')
  console.log('\nWrote updated am/translation.json')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
