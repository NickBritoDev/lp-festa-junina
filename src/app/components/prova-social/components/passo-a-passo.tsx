/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import { useIsMobile } from '@/responsive/useMediaQuery'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export default function PassoAPasso (): JSX.Element {
  const isMobile = useIsMobile()
  // const steps = [
  //   { title: 'Economizar dinheiro', description: 'Taxas de juros competitivas e prazos flexíveis.' },
  //   { title: 'Vantagens e flexibilidade', description: 'Conveniência e flexibilidade de um empréstimo\n projetado especificamente para servidores públicos.' },
  //   { title: 'Ganhe tranquilidade', description: 'Saber que suas finanças estão sob controle.' }
  // ]

  return (
    <Flex flexDir={isMobile ? 'column' : 'row'} w={'100%'} alignItems={'center'} justifyContent={'center'} gap={isMobile ? 12 : 32}>
      {/* <Stepper color={'red'} colorScheme='gray' w={isMobile ? '100%' : '50%'} mt={10} index={3} orientation='vertical' height='400px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index} >
            <StepIndicator color={'red'}>
              <StepStatus
                active={<StepNumber />}
                incomplete={<StepNumber />}
                complete={<StepNumber />}
              />
            </StepIndicator>

            <Box color={'red'} flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription >
                <Text color={'black'}>
                  {step.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Text>
              </StepDescription>

            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper> */}

      <Flex display={'none'} mt={12} w={isMobile ? '100%' : '50%'} flexDir={'column'} alignItems={'flex-start'} justifyContent={'center'} gap={8} borderLeft={'solid #dd1818'}>
        <Flex ml={2} gap={2} alignItems={'center'}>
          <FiCheckCircle size={22} color='red' />
          1.
          <Text textAlign={'left'}>
            Realize seus sonhos de educação, viagem ou aquisição de bens consolidados.</Text>
        </Flex>
        <Flex ml={2} gap={2} alignItems={'center'}>
          <FiCheckCircle size={22} color='red' />
          2.
          <Text textAlign={'left'}>
            Gerencie melhor suas dívidas e melhore sua saúde financeira.</Text>
        </Flex>
        <Flex ml={2} gap={2} alignItems={'center'}>
          <FiCheckCircle size={22} color='red' />
          3.
          <Text textAlign={'left'}>
            Prepare-se investindo em sua educação ou planejamento de aposentadoria.</Text>
        </Flex>
        <Flex ml={2} gap={2} alignItems={'center'}>
          <FiCheckCircle size={22} color='red' />
          4.
          <Text textAlign={'left'}>
            Dê o primeiro passo em direção a uma vida financeira mais estável e próspera.</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
