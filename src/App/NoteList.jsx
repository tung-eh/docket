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
      '13 things you should give up if you want to be a successful UX Designer',
    date: 'May 15, 2021',
    color: '#f0a177',
  },
]

const NoteItem = ({ content, date, color }) => (
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
    p={4}
    pb={3}
    pr={3}
  >
    {content}
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
