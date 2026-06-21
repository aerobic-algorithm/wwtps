import raw from '../data/process.json'
import { iconMap } from './iconMap'

export const treatmentStages = raw.map((stage) => ({
  ...stage,
  icon: iconMap[stage.icon],
}))
