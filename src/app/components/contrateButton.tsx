/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import { IoLogoWhatsapp } from 'react-icons/io5'

export default function ContrateButton (): JSX.Element {
  return (
    <>
      <Button as="a"
        href={'https://api.whatsapp.com/send?phone=+5511999495081&text=Olá, vim através da página de consórcios do Grupo Mais Valor e gostaria de tirar algumas dúvidas. Você poderia me ajudar?'}
        target="_blank"
        rel="noopener noreferrer" mt={4} bg={'white'} color={'#dd1818'}>
        <Text mr={2}>Contrate Já!</Text>
        <IoLogoWhatsapp size={20} />
      </Button>
    </>
  )
}
