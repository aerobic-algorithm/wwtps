import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const BASE_URL = 'https://hubwastewater.com'
const SITE_NAME = 'Hub Wastewater Solutions'
const DEFAULT_DESC = 'Wastewater treatment consulting, commissioning, and operations support for utility, industrial, and municipal systems.'

export default function Seo({ title, description, path }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const pageTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const url = `${BASE_URL}${path || ''}`
  const desc = description || DEFAULT_DESC

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}
