/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useIsMobile } from '@/responsive/useMediaQuery'
import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

export default function WhatsAppButton (): JSX.Element {
  const isMobile = useIsMobile()

  return (
    <Button onClick={() => {
    }}
      gap={2}
      as="a"
      href={'https://api.whatsapp.com/send?phone=+5511999495081&text=Olá, vim através da página de consórcios do Grupo Mais Valor e gostaria de tirar algumas dúvidas. Você poderia me ajudar?'}
      target="_blank"
      rel="noopener noreferrer"
      bg="#dd1818"
      color={'#fff'}
      _hover={{ color: 'black' }}
      colorScheme='red'>
      <Text display={isMobile ? 'none' : 'initial'}>Fale agora</Text>
      <BsWhatsapp />
    </Button>
  )
}
