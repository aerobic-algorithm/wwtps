import {
  HiOutlineArrowDownCircle,
  HiOutlineRectangleGroup,
  HiOutlineCircleStack,
  HiOutlineBars3BottomLeft,
  HiOutlineBeaker,
  HiOutlineArrowUpCircle,
} from 'react-icons/hi2'

export const treatmentStages = [
  {
    id: 'influent',
    icon: HiOutlineArrowDownCircle,
  },
  {
    id: 'primary',
    icon: HiOutlineRectangleGroup,
  },
  {
    id: 'biological',
    icon: HiOutlineCircleStack,
  },
  {
    id: 'secondary',
    icon: HiOutlineBars3BottomLeft,
  },
  {
    id: 'tertiary',
    icon: HiOutlineBeaker,
  },
  {
    id: 'effluent',
    icon: HiOutlineArrowUpCircle,
  },
]
