/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useIsMobile } from '@/responsive/useMediaQuery'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaBowlFood } from 'react-icons/fa6'
import { GiBrazilFlag, GiMusicalNotes } from 'react-icons/gi'

export default function Autoridade (): JSX.Element {
  const isMobile = useIsMobile()
  return (
    <Flex px={isMobile ?? 20} bg={'white'} color={'black'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} w={'100%'} mt={14} p={4} pl={isMobile ? 4 : 20}>
      <Heading size={isMobile ? 'lg' : 'xl'}>Discover the Richness of Festa Junina</Heading>
      <Text fontSize={18} mt={isMobile ? 4 : -10} mb={isMobile ? 10 : 0} p={isMobile ? 0 : 10} textAlign={isMobile ? 'justify' : 'center'}>
      Come and explore the vibrant traditions of Festa Junina! Learn about the delicious typical foods, lively traditional dances, and the rich cultural heritage of this beloved Brazilian festival.
</Text>

      <Flex flexDir={isMobile ? 'column' : 'row'} w={'100%'} alignItems={'center'} justifyContent={'space-between'} pr={isMobile ? 0 : 40}>
        <Flex mr={isMobile ? 0 : 10} flexDir={isMobile ? 'column' : 'column'} my={8} gap={12} w={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Flex alignItems={'flex-start'} justifyContent={'center'} flexDir={'column'} >
            <FaBowlFood color='#dd1818' size={100} />
            <Text>
              <strong>Typical Food:</strong> Indulge in the mouthwatering flavors of Festa Junina with our detailed guide to traditional dishes. From sweet treats to savory delights, discover the recipes and stories behind these festive foods.

            </Text>
            <Text mt={2} _hover={{ bg: 'red', color: 'white' }} border={'solid 2px red'} p={2} rounded={'lg'} cursor={'pointer'}> <a href="https://caminhoslanguages.com/blog/festa-junina-food-brazil/" target='_blank' rel="noreferrer">know more</a></Text>
          </Flex>

          <Flex alignItems={'flex-start'} justifyContent={'center'} flexDir={'column'} >
            <GiMusicalNotes color='#dd1818' size={100} />
            <Text>
           <strong>Traditional Dance:</strong> Join in the fun and excitement of the quadrilha dance! Learn the steps and history of this popular dance that brings communities together during the festival.
            </Text>
            <Text mt={2} _hover={{ bg: 'red', color: 'white' }} border={'solid 2px red'} p={2} rounded={'lg'} cursor={'pointer'}> <a href="https://dayanasdaily.com/2021/06/24/festa-junina-a-traditional-brazilian-celebration/" target='_blank' rel="noreferrer">know more</a></Text>
          </Flex>

          <Flex alignItems={'flex-start'} justifyContent={'center'} flexDir={'column'}>
            <GiBrazilFlag color='#dd1818' size={100} />
            <Text>
           <strong>Regional Culture:</strong> Dive into the cultural significance of Festa Junina. Discover how this festival reflects the unique blend of European and indigenous influences in Brazilian culture.
            </Text>
            <Text mt={2} _hover={{ bg: 'red', color: 'white' }} border={'solid 2px red'} p={2} rounded={'lg'} cursor={'pointer'}> <a href="https://www.todamateria.com.br/festas-juninas/" target='_blank' rel="noreferrer">know more</a></Text>
          </Flex>
        </Flex>

        <Box mr={isMobile ? 0 : -20} w={'100%'}>
  {isMobile
    ? (
      <iframe
        width="360"
        height="450"
        src="https://www.youtube.com/embed/4maxZwutdZg?si=kAxWL8zkc3PAlMwb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      )
    : (
      <iframe
        width="750"
        height="450"
        src="https://www.youtube.com/embed/4maxZwutdZg?si=kAxWL8zkc3PAlMwb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      )}
</Box>

      </Flex>

    </Flex>
  )
}
