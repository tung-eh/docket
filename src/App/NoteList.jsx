import { Box, Flex, Grid, IconButton } from 'theme-ui'
import React from 'react'

import Icon from '../components/Icon'

const notes = [
  {
    content:
      'The begining of screenless design; UI jobs to be taken over by Solution Architect',
    date: 'May 21, 2021',
    color: '#ffcf7d',
  },
  {
    content:
      '13 things You should give up if You want to be a successful UX Designer',
    date: 'May 15, 2021',
    color: '#f0a177',
    star: true,
  },
]

const NoteItem = ({ content, date, color, star }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      bg: color,
      borderRadius: 20,
      width: 260,
      height: 260,
      fontWeight: 500,
    }}
    p={3}
    pl={4}
  >
    <Box>
      <IconButton
        sx={{
          bg: 'black',
          borderRadius: '50%',
          boxSizing: 'content-box',
          width: 'auto',
          height: 'auto',
          float: 'right',
          visibility: star ? 'visible' : 'hidden',
        }}
        p="10px"
        ml={4}
        mb={4}
      >
        <Icon name="star" width={16} height={16} color="#ffcf7d" />
      </IconButton>
      <Box mt={2}>{content}</Box>
    </Box>
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ fontWeight: 400, fontSize: 1 }}>{date}</Box>
      <IconButton
        sx={{
          bg: 'black',
          borderRadius: '50%',
          boxSizing: 'content-box',
          width: 'auto',
          height: 'auto',
        }}
        p="14px"
      >
        <Icon name="edit" width={16} height={16} />
      </IconButton>
    </Flex>
  </Flex>
)

const NoteList = () => (
  <Grid sx={{ gridAutoFlow: 'column', gap: 4 }}>
    {notes.map((note, index) => (
      <NoteItem key={index} {...note} />
    ))}
  </Grid>
)

export default NoteList
