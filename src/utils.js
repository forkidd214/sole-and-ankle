/**
 * Several little utilities for this project.
 *
 * NOTE: These are NOT generic, and should not be copied
 * to other projects. They're quick imperfect implementations
 * for the known, fixed data we work with here.
 */
import differenceInDays from 'date-fns/differenceInDays'

export function formatPrice(price) {
  return `$${price / 100}`
}

export function pluralize(string, num) {
  return num === 1 ? `1 ${string}` : `${num} ${string}s`
}

export function isNewShoe(releaseDate) {
  return differenceInDays(new Date(), releaseDate) < 30
}

export function findCategory(Categories, categorySlug) {
  return Categories.find(({ slug }) => slug === categorySlug)
}

export function sortShoes(shoes, sort) {
  return sort === 'newest'
    ? shoes.sort((a, b) => b.releaseDate - a.releaseDate)
    : sort === 'price'
    ? shoes.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
    : sort === 'curated'
    ? shoes.sort((a, b) => a.category.localeCompare(b.category))
    : shoes
}

export function themeToCSSVariables(theme) {
  if (!theme) {
    return null
  }
  const cssVars = {}
  for (const prop in theme) {
    // Convert property name from camelCase to kebab-case
    const varName = `--${prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`
    cssVars[varName] = theme[prop]
  }
  return cssVars
}
