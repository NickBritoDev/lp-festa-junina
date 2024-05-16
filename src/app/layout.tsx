import React from 'react'
import type { Metadata } from 'next'
import { Providers } from './provider'
// import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Box } from '@chakra-ui/react'
// import { Helmet } from 'react-helmet'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Festa Junina',
  description: 'Criado por: NickBritoDev'
}

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="pt-br">
      <head>
      </head>
      <body >
        <SpeedInsights />
        <Analytics />
        <Providers>
          <Box bg={'#dd1818'} w={'100%'} overflow={'hidden'}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  )
}
