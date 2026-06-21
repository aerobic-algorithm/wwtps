import raw from '../data/services.json'
import { iconMap } from './iconMap'

export const serviceCategories = raw.categories

export const services = raw.items.map((item) => ({
  ...item,
  icon: iconMap[item.icon],
}))
