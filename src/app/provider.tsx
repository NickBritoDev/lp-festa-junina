'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const customTheme = extendTheme({
  config,
  styles: {
    global: {
      '::-webkit-scrollbar': {
        width: '10px',
        height: '6px'
      },
      '::-webkit-scrollbar-track': {
        background: 'white'
      },
      '::-webkit-scrollbar-thumb': {
        background: '#dd1818'
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555'
      }
    }
  }
})

export function Providers ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
