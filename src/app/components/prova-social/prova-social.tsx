/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useIsMobile } from '@/responsive/useMediaQuery'

export default function ProvaSocial (): JSX.Element {
  const isMobile = useIsMobile()

  return (
    <Box bg={'white'} color={'black'} p={4} px={isMobile ? 4 : 20} mt={20} w={'100%'} boxShadow={isMobile ? '10px -10px 200px 30px #dd1818' : '10px -10px 200px 50px #dd1818'}>
      <Flex
        pb={12}
        mt={isMobile && 2} p={isMobile && 0.5}
        boxShadow={'inset 10px 10px 5px 200px rgba(0,0,0,0.4)'} rounded={'3xl'}
        style={{ backgroundImage: 'url(https://s4.static.brasilescola.uol.com.br/be/2023/02/mulheres-e-homens-com-roupas-coloridas-dancando-quadrilha-em-um-salao-na-cidade-de-campina-grande-na-paraiba.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        flexDir={'column'} alignItems={'center'}>
        <Heading color={'white'} mb={4} mt={isMobile ? 10 : 20} size={isMobile ? 'md' : 'xl'} textAlign={'center'}>
        Discover the Traditional Dance of Festa Junina
        </Heading>
        <Text textAlign={'center'} px={20} color={'white'}>Get ready to dance to the lively rhythms of Festa Junina! The quadrilha, also known as the square dance, is the highlight of this Brazilian celebration. <br /> Here’s what you need to know about this traditional dance</Text>
        <Button my={4} colorScheme='red'><a href="https://www.youtube.com/watch?v=RQlkdNj1CmY" target='_blank' rel="noreferrer">know more</a></Button>
      </Flex>

      <Box boxShadow={isMobile ? '-10px -350px 200px 70px #dd1818' : '10px -10px 200px 50px #dd1818'}></Box>

    </Box>
  )
}
