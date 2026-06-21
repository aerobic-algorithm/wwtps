import raw from '../data/posts.json'

export const posts = raw

export function getPostBySlug(slug) {
  return raw.find((p) => p.slug === slug) || null
}
