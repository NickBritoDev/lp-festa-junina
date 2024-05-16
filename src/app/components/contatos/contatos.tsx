/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React from 'react'
import { useIsMobile } from '@/responsive/useMediaQuery'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'

export default function Contatos (): JSX.Element {
  const isMobile = useIsMobile()

  return (
    <Box w={'100%'} p={4} px={isMobile ? 4 : 24} >
      <Heading color={'white'} mt={isMobile ? 6 : 10} mb={10} size={isMobile ? 'md' : 'xl'} textAlign={'center'}>
      Celebrating the Spirit of Festa Junina
      </Heading>

      <Text color={'white'} textAlign={'left'} fontSize={isMobile ? 16 : 20} mb={12}>
      As we draw the curtains on another joyous Festa Junina celebration, let's reflect on the richness of Brazilian culture and the memories we've created together. With its vibrant traditions, delicious flavors, and heartwarming camaraderie, Festa Junina has once again brought communities closer and filled our hearts with warmth.
<br />
<br />
As the bonfires fade and the music softens, let us carry the spirit of Festa Junina with us throughout the year. Let us cherish the bonds we've forged, the laughter we've shared, and the traditions we've upheld.
<br />
<br />
Until we gather again next year to dance under the starlit skies and savor the taste of sweet corn cakes, let the spirit of Festa Junina continue to illuminate our lives with joy and unity.
      </Text>
      <VStack w={'100%'} gap={4} display={isMobile ? 'none' : 'flex'} >
      <Flex pb={isMobile && 4} pos={'relative'} flexDir={isMobile ? 'column' : 'row'} gap={isMobile ? 4 : 8}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sD4znNqMdIM?si=IvkkcrM1UOxIxT-Z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/prjIv-YFzuM?si=-A8iGrglW4euEwpw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </Flex>
      <Flex pb={isMobile && 4} pos={'relative'} flexDir={isMobile ? 'column' : 'row'} gap={isMobile ? 4 : 8}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6_jJqv4ULCk?si=o137t4mG51jTIOdO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9A29VpXJ2Gs?si=Th4pxiAj7Pq1j535" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </Flex>
        </VStack>

        <VStack w={'100%'} gap={4} display={isMobile ? 'flex' : 'none'} >
      <Flex pb={isMobile && 4} pos={'relative'} flexDir={isMobile ? 'column' : 'row'} gap={isMobile ? 4 : 8}>
        <iframe width="360" height="315" src="https://www.youtube.com/embed/sD4znNqMdIM?si=IvkkcrM1UOxIxT-Z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="360" height="315" src="https://www.youtube.com/embed/prjIv-YFzuM?si=-A8iGrglW4euEwpw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </Flex>
      <Flex pb={isMobile && 4} pos={'relative'} flexDir={isMobile ? 'column' : 'row'} gap={isMobile ? 4 : 8}>
      <iframe width="360" height="315" src="https://www.youtube.com/embed/6_jJqv4ULCk?si=o137t4mG51jTIOdO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="360" height="315" src="https://www.youtube.com/embed/9A29VpXJ2Gs?si=Th4pxiAj7Pq1j535" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </Flex>
        </VStack>
    </Box>
  )
}
