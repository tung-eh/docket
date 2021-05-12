import { Box, Flex, Heading, ThemeProvider } from 'theme-ui'
import React from 'react'

import NoteList from './NoteList'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ height: '100vh' }}>
        <SideBar p={4} />
        <Box py={4} px={5}>
          <SearchBar mb={5} />
          <Heading
            as="h1"
            sx={{ fontWeight: 600, fontSize: 7, lineHeight: '1em' }}
            mb={5}
          >
            Notes
          </Heading>
          <NoteList />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default App
