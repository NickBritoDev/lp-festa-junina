/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React, { useState } from 'react'
import { useIsMobile } from '@/responsive/useMediaQuery'
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'

export default function Form (): JSX.Element {
  const toast = useToast()
  const isMobile = useIsMobile()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    necessidade: '',
    valor_desejado: '',
    renda_mensal: '',
    produto: 'SERVIDOR PUBLICO',
    duvida: 'ENTRE EM CONTATO COMIGO',
    origem: 'CONTATO',
    pagina: 'LP SERVIDOR PUBLICO'
  })

  const handleSubmit = async (): Promise<void> => {
    try {
      const response = await fetch('/api/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          necessidade: '',
          valor_desejado: '',
          renda_mensal: '',
          produto: 'SERVIDOR PUBLICO',
          duvida: 'ENTRE EM CONTATO COMIGO',
          origem: 'CONTATO',
          pagina: 'LP SERVIDOR PUBLICO'
        })

        toast({
          title: 'ENVIADO.',
          description: 'Inserção de formulário realizada com sucesso!',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
      } else {
        toast({
          title: 'ERRO AO ENVIAR.',
          description: 'Inserção de formulário não pode ser realizada!',
          status: 'warning',
          duration: 9000,
          isClosable: true
        })
      }
    } catch (error) {
      console.error('Erro ao realizar a solicitação:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <Box borderRadius={'20px'} mb={isMobile && 10} w={'100%'} p={5} gap={4} bg={'rgba(0,0,0,0.4)'} display={'flex'} flexDir={'column'} alignItems={'flex-start'} justifyContent={'space-between'}>
      <Box color={'white'} w={'100%'}>
        <Text w={'max-content'} mb={8} fontSize={22} borderBottom={'1px solid #1A6A31'}>Fale conosco</Text>

        <Text>Nome completo</Text>
        <Input
          variant={'flushed'}
          mb={4}
          type='text'
          placeholder='Digite seu nome completo...'
          name='nome'
          value={formData.nome}
          onChange={handleChange}
        />

        <Text>Celular com DDD</Text>
        <Input
          variant={'flushed'}
          mb={4}
          type='text'
          placeholder='Digite seu telefone pessoal...'
          name='telefone'
          value={formData.telefone}
          onChange={handleChange}
        />

        <Text>O que você precisa?</Text>
        <Input
          variant={'flushed'}
          mb={4}
          type='text'
          placeholder='Veiculo, Imóvel ou Máquinas e Equipamentos...'
          name='necessidade'
          value={formData.necessidade}
          onChange={handleChange}
        />

        <Text>Valor que deseja</Text>
        <Input
          variant={'flushed'}
          mb={4}
          type='number'
          placeholder='Digite o valor que deseja...'
          name='valor_desejado'
          value={formData.valor_desejado}
          onChange={handleChange}
        />

        <Text>Sua renda mensal</Text>
        <Input
          variant={'flushed'}
          mb={4}
          type='number'
          placeholder='Digite sua renda mensal...'
          name='renda_mensal'
          value={formData.renda_mensal}
          onChange={handleChange}
        />

        <Text>E-mail em uso</Text>
        <Input
          variant={'flushed'}
          type='email'
          placeholder='Digite seu email de uso diario...'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </Box>

      <Button onClick={() => { void handleSubmit() }} w={'100%'} mt={10} gap={4} bg={'#dd1818'} colorScheme='red' _hover={{ color: 'black' }} color={'white'}>
        <Text>Simule Já!</Text>
      </Button>
    </Box>
  )
}
