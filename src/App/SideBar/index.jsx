import { Box, Heading } from 'theme-ui'
import React from 'react'

import NewButton from './NewButton'

const Logo = (props) => (
  <Heading as="h3" sx={{ fontWeight: 600 }} {...props}>
    Docket
  </Heading>
)

const SideBar = (props) => (
  <Box sx={{ borderRight: '1px solid', borderColor: 'lightGray' }} {...props}>
    <Logo mb={5} />
    <NewButton />
  </Box>
)

export default SideBar
