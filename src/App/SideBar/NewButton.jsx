import { Box, Button, Flex, IconButton } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import anime from 'animejs'

import { COLORS } from '../../constants'
import Icon from '../../components/Icon'

const SvgFilter = ({ id }) => (
  <Box as="svg" sx={{ width: 0 }}>
    <defs>
      <filter id={id}>
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
          result="gooey-effect"
        />
        <feComposite in="SourceGraphic" in2="gooey-effect" operator="atop" />
      </filter>
    </defs>
  </Box>
)

const NewButton = () => {
  const [open, setOpen] = useState(null)
  const toggle = () => setOpen((open) => !open)
  useEffect(() => {
    const tl = anime.timeline()
    if (open === true) {
      tl.add({
        targets: '#add-note',
        translateY: [0, -12, 0],
        scale: [1, 0.85, 1],
        rotate: 316,
        duration: 600,
        easing: 'easeInOutSine',
      })
        .add(
          {
            targets: '.dot:first-child',
            translateY: [0, 80],
            scaleY: [1.8, 1],
            duration: 3200,
          },
          '-=400'
        )
        .add(
          {
            targets: '.dot:not(:first-child)',
            translateY: function (el, index) {
              return [100 + 50 * index, 130 + 50 * index]
            },
            scaleY: [0, 1],
            duration: 1600,
            opacity: {
              value: 1,
              duration: 10,
            },
            delay: anime.stagger(240),
          },
          '-=2600'
        )
    }
    if (open === false) {
      tl.add({
        targets: '#add-note',
        rotate: 0,
        duration: 600,
        easing: 'easeInOutSine',
      }).add(
        {
          targets: '.dot',
          translateY: 0,
          duration: 400,
          delay: anime.stagger(60),
          easing: 'easeInOutSine',
        },
        '-=400'
      )
    }

    return () => {
      tl.pause()
    }
  }, [open])

  const filterId = 'gooey-effect'

  return (
    <>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          filter: `url(#${filterId})`,
        }}
      >
        <IconButton
          id="add-note"
          onClick={toggle}
          sx={{
            bg: 'black',
            boxSizing: 'content-box',
            borderRadius: '50%',
            width: 'auto',
            height: 'auto',
            zIndex: 20,
          }}
          p="12px"
        >
          <Icon name="plus" />
        </IconButton>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          {COLORS.map((color) => (
            <Button
              key={color}
              className="dot"
              sx={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                bg: color,
                position: 'absolute',
              }}
            />
          ))}
        </Flex>
      </Flex>
      <SvgFilter id={filterId} />
    </>
  )
}

export default NewButton
