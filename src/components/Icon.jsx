import React from 'react'
import { Box } from 'theme-ui'
import { ReactComponent as Circle } from '../icons/circle.svg'
import { ReactComponent as Edit } from '../icons/edit.svg'
import { ReactComponent as Plus } from '../icons/plus.svg'
import { ReactComponent as Search } from '../icons/search.svg'
import { ReactComponent as Star } from '../icons/star.svg'
const MAP = {
  circle: Circle,
  edit: Edit,
  plus: Plus,
  search: Search,
  star: Star,
}
const Icon = ({ name, ...props }) => {
  const Component = MAP[name]
  if (!Component) return null
  return <Box as={Component} {...props} />
}
export default Icon
