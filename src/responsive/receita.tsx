/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Button, Heading, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

interface ReceitaProps {
  Title: string
  Receita: {
    Ingredients: string[]
    Instructions: string[]
  }
}

const Receita: React.FC<ReceitaProps> = ({ Title, Receita }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button bg={'red'} colorScheme='red' onClick={onOpen}>Cooking</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml={4}>{Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>

              <Box mb={4}>
                <Heading as="h2" size="lg" mb={2}>
                Ingredients
                </Heading>
                <List spacing={2}>
                  {Receita.Ingredients.map((ingredient, index) => (
                    <ListItem key={index}>{ingredient}</ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" mb={2}>
                Instructions
                </Heading>
                <List spacing={2}>
                  {Receita.Instructions.map((instruction, index) => (
                    <ListItem key={index}>{instruction}</ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Receita
