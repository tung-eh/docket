import { Box, Flex, Heading, IconButton } from 'theme-ui'
import React from 'react'

import { COLORS } from '../constants'
import Icon from '../components/Icon'

const Logo = (props) => (
  <Heading as="h3" sx={{ fontWeight: 600 }} {...props}>
    Docket
  </Heading>
)

const NewButton = () => {
  return (
    <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
      <IconButton
        sx={{
          bg: 'black',
          boxSizing: 'content-box',
          borderRadius: '50%',
          width: 'auto',
          height: 'auto',
        }}
        p="12px"
        mb="34px"
      >
        <Icon name="plus" />
      </IconButton>
      {COLORS.map((color) => (
        <Box
          key={color}
          sx={{ width: '18px', height: '18px', borderRadius: '50%', bg: color }}
          mb="24px"
        />
      ))}
    </Flex>
  )
}

const SideBar = (props) => (
  <Box sx={{ borderRight: '1px solid', borderColor: 'lightGray' }} {...props}>
    <Logo mb={5} />
    <NewButton />
  </Box>
)

export default SideBar
