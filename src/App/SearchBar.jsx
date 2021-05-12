import { Flex, Input } from 'theme-ui'
import React from 'react'

import Icon from '../components/Icon'

const SearchBar = (props) => {
  return (
    <Flex sx={{ alignItems: 'center' }} {...props}>
      <Icon name="search" width={20} height={20} mr={2} />
      <Input
        placeholder="Search"
        sx={{
          border: 'none',
          outline: 'none',
          fontWeight: 500,
        }}
        p={0}
      />
    </Flex>
  )
}

export default SearchBar
