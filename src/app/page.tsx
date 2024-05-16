/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React, { useRef, useState } from 'react'
import { useIsMobile } from '@/responsive/useMediaQuery'
import { Box, Flex, Text, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from '@chakra-ui/react'
import Inicio from './components/inicio/inicio'
import Beneficios from './components/beneficios/beneficios'
import Contatos from './components/contatos/contatos'
import Loading from './loading'
import Autoridade from './components/autoridade/autoridade'
import ProvaSocial from './components/prova-social/prova-social'
import { IoMenu } from 'react-icons/io5'
import { Image } from '@chakra-ui/next-js'
import logo from '@/images/logo/logo.png'

export default function Start (): JSX.Element {
  const isMobile = useIsMobile()
  const [selectedSection, setSelectedSection] = useState('inicio')
  const [isLoading, setIsLoading] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  const scrollToComponent = (id: string): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setSelectedSection(id)
    }
  }

  return (
    <>
      {isLoading
        ? (
          <Loading />
          )
        : (
          <>
            <Flex
              boxShadow={'xl'}
              borderRadius={'0 0 20px 20px'}
              pt={1}
              px={5}
              bg={'white'}
              zIndex={999}
              w={'100%'}
              pos={'fixed'}
              top={-1}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Image w={14} alt='logo mais valor' src={logo} />
              <Flex color={'black'} display={isMobile ? 'none' : 'flex'} gap={10}>
                <Text
                  as="a"
                  cursor={'pointer'}
                  onClick={() => { scrollToComponent('inicio') }}
                  borderBottom={selectedSection === 'inicio' ? '2px solid #dd1818' : 'none'}
                >
                  Home
                </Text>
                <Text
                  as="a"
                  cursor={'pointer'}
                  onClick={() => { scrollToComponent('autoridade') }}
                  borderBottom={selectedSection === 'autoridade' ? '2px solid #dd1818' : 'none'}
                >
                  Discover
                </Text>
                <Text
                  as="a"
                  cursor={'pointer'}
                  onClick={() => { scrollToComponent('beneficios') }}
                  borderBottom={selectedSection === 'beneficios' ? '2px solid #dd1818' : 'none'}
                >
                  Typical Recipes
                </Text>
                <Text
                  as="a"
                  cursor={'pointer'}
                  onClick={() => { scrollToComponent('depoimentos') }}
                  borderBottom={selectedSection === 'depoimentos' ? '2px solid #dd1818' : 'none'}
                >
                  Dance
                </Text>
                <Text
                  as="a"
                  cursor={'pointer'}
                  onClick={() => { scrollToComponent('contatos') }}
                  borderBottom={selectedSection === 'contatos' ? '2px solid #dd1818' : 'none'}
                >
                  Celebrating
                </Text>
              </Flex>

              <Flex gap={2}>

                {isMobile && (
                  <>
                    <Button ref={btnRef} colorScheme='red' bg={'#dd1818'} onClick={onOpen}>
                      <IoMenu color='white' size={22} />
                    </Button>
                    <Drawer
                      isOpen={isOpen}
                      placement='top'
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent bg={'white'}>
                        <DrawerCloseButton />

                        <DrawerBody zIndex={9999}>
                          <Flex color={'black'} my={10} flexDir={'column'} gap={10}>
                            <Text
                              w={'max-content'}
                              borderBottom={selectedSection === 'inicio' ? '2px solid #dd1818' : 'none'}
                              as="a"
                              cursor={'pointer'}
                              onClick={() => {
                                onClose()
                                scrollToComponent('inicio')
                              }}
                            >
                              Home
                            </Text>
                            <Text
                              w={'max-content'}
                              borderBottom={selectedSection === 'autoridade' ? '2px solid #dd1818' : 'none'}
                              as="a"
                              cursor={'pointer'}
                              onClick={() => {
                                onClose()
                                scrollToComponent('autoridade')
                              }}
                            >
                              Discover
                            </Text>
                            <Text
                              w={'max-content'}
                              borderBottom={selectedSection === 'beneficios' ? '2px solid #dd1818' : 'none'}
                              as="a"
                              cursor={'pointer'}
                              onClick={() => {
                                onClose()
                                scrollToComponent('beneficios')
                              }}
                            >
                              Typical Recipes
                            </Text>
                            <Text
                              w={'max-content'}
                              borderBottom={selectedSection === 'depoimentos' ? '2px solid #dd1818' : 'none'}
                              as="a"
                              cursor={'pointer'}
                              onClick={() => {
                                onClose()
                                scrollToComponent('depoimentos')
                              }}
                            >
                              Dance
                            </Text>
                            <Text
                              w={'max-content'}
                              borderBottom={selectedSection === 'contatos' ? '2px solid #dd1818' : 'none'}
                              as="a"
                              cursor={'pointer'}
                              onClick={() => {
                                onClose()
                                scrollToComponent('contatos')
                              }}
                            >
                              Celebrating
                            </Text>
                          </Flex>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </>
                )}
              </Flex>
            </Flex>

            <Box id="inicio"><Inicio /></Box>
            <Box id="autoridade"><Autoridade /></Box>
            <Box id="beneficios"><Beneficios /></Box>
            <Box id="depoimentos"><ProvaSocial /></Box>
            <Box id="contatos"><Contatos /></Box>
          </>
          )}
    </>
  )
}
