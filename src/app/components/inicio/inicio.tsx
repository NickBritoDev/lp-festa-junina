/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useIsMobile } from '@/responsive/useMediaQuery'
import servidores from './images/servidores.png'
import { Image } from '@chakra-ui/next-js'

export default function Inicio (): JSX.Element {
  const isMobile = useIsMobile()
  // const scrollToBottom = (): void => {
  //   document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' })
  // }

  return (
    <Box px={isMobile ? 1 : 20} >
      <Flex px={isMobile ?? 20} mt={isMobile ? 20 : 20} pos={'relative'} alignItems={'center'} justifyContent={'center'} mb={40}>
        <Flex zIndex={9} flexDir={'column'} w={'100%'} >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Flex
              mt={isMobile && 2} p={isMobile && 0.5}
              rounded={'3xl'}
              flexDir={'column'} alignItems={'center'}>
              <Heading color={'white'} mb={10} mt={isMobile ? -6 : 20} size={isMobile ? 'md' : 'xl'} textAlign={'center'}>
              Festa Junina: A Celebration of Brazilian Culture
              </Heading>
              <Image display={isMobile ? 'initial' : 'none'} w={650} src={servidores} alt='sevidores mais valor' />
            </Flex>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Text mr={isMobile ? 0 : -32} mt={isMobile ? 10 : 10} color={'white'} mb={4}
              bg={'rgba(0,0,0,0.4)'} p={4} borderRadius={'xl'} fontSize={isMobile ? 14 : 16}
              w={isMobile ? '100%' : 'max-content'} textAlign={isMobile ? 'center' : 'left'} >
Festa Junina, also known as June Festival, is a traditional Brazilian celebration that occurs in June to honor St. John the Baptist. <br></br> The festival has its roots in Portuguese festivities and indigenous culture, blending European and native elements. <br /> Key traditions include wearing rural costumes, dancing the quadrilha (a type of square dance), <br /> and enjoying typical foods such as corn-based dishes, sweets, and drinks like quentão (a hot spiced beverage).            </Text>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Text pos={isMobile ? 'initial' : 'absolute'} left={0} color={'white'}
              bg={'rgba(0,0,0,0.4)'} p={4} borderRadius={'xl'} fontSize={isMobile ? 14 : 16}
              w={isMobile ? '100%' : 'max-content'} textAlign={isMobile ? 'center' : 'left'} mb={isMobile ? -10 : 0}>
The festival is marked by vibrant decorations, featuring colorful flags and bonfires. <br /> Communities come together for lively parties that include folk music, games, and performances. <br /> One highlight is the “casamento caipira” (hillbilly wedding), a humorous reenactment of a rural wedding. <br /> Additionally, fireworks light up the skies, and participants partake in various activities like sack races, tug-of-war, and the traditional pole-climbing contest.
            </Text>
          </motion.div>
        </Flex>
        <Image display={isMobile ? 'none' : 'initial'} w={600} src={servidores} alt='sevidores mais valor' />

      </Flex>
    </Box>
  )
}
