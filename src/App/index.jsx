import { Box, Flex, ThemeProvider } from 'theme-ui'
import React from 'react'

import SideBar from './SideBar'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ height: '100vh' }}>
        <SideBar p={4} />
        <Box py={4} px={5}>
          Content
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default App
