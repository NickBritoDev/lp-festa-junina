'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import logo from '@/images/logo/logo.png'
import { Image } from '@chakra-ui/next-js'

export default function Loading (): JSX.Element {
  return (
    <Box
      color={'white'}
      zIndex={9999}
      bg={'#dd1818'}
      h={'100vh'}
      w={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <motion.div
        initial={{ opacity: 0, y: '-100vh' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 120 }}
      >
        <Image alt='logo mais valor' src={logo} />
      </motion.div>
    </Box>
  )
}
