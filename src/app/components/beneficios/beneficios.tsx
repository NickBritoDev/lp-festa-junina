/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useIsMobile } from '@/responsive/useMediaQuery'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Receita from '@/responsive/receita'

export default function Beneficios (): JSX.Element {
  const isMobile = useIsMobile()

  const receita1 = {
    Ingredients: [
      '2 cups of fresh corn kernels (or canned, drained)',
      '1 cup of coconut milk',
      '1 cup of sugar',
      '3 eggs',
      '1 cup of cornmeal',
      '1/2 cup of all-purpose flour',
      '1/2 cup of vegetable oil',
      '1 tablespoon of baking powder',
      '1 teaspoon of ground cinnamon',
      'A pinch of salt'
    ],
    Instructions: [
      'Preheat your oven to 350°F (175°C). Grease a 9-inch round cake pan.',
      'In a blender, combine the corn kernels, coconut milk, sugar, eggs, and oil. Blend until smooth.',
      'In a large bowl, mix the cornmeal, flour, baking powder, cinnamon, and salt.',
      'Pour the blended mixture into the dry ingredients and mix until well combined.',
      'Pour the batter into the prepared cake pan and bake for about 40-45 minutes, or until a toothpick inserted into the center comes out clean.',
      'Allow the cake to cool before serving.'
    ]
  }

  const receita2 = {
    Ingredients: [
      '1 cup of short-grain rice',
      '4 cups of milk',
      '1 cup of water',
      '1 cup of sugar',
      '1 cinnamon stick',
      '3 cloves',
      '1/2 cup of sweetened condensed milk',
      'Ground cinnamon for garnish'
    ],
    Instructions: [
      'In a large pot, bring the rice, water, cinnamon stick, and cloves to a boil. Reduce the heat and simmer until the water is mostly absorbed.',
      'Add the milk and sugar to the pot. Cook over medium heat, stirring frequently, until the rice is tender and the mixture thickens.',
      'Stir in the sweetened condensed milk and cook for an additional 5-10 minutes.',
      'Remove the cinnamon stick and cloves. Serve warm or chilled, garnished with ground cinnamon.'
    ]
  }

  const receita3 = {
    Ingredients: [
      '2 cups of cornmeal',
      '4 cups of chicken broth',
      '1 tablespoon of olive oil',
      '1 onion, chopped',
      '2 garlic cloves, minced',
      '2 sausages, sliced',
      '1 tomato, diced',
      '1/2 cup of green peas',
      '1/2 cup of corn kernels',
      '1/4 cup of chopped parsley',
      'Salt and pepper to taste'
    ],
    Instructions: [
      'Heat the olive oil in a large pan over medium heat. Sauté the onion and garlic until fragrant.',
      'Add the sliced sausages and cook until browned.',
      'Stir in the diced tomato, peas, corn, and parsley. Cook for a few minutes.',
      'Add the chicken broth and bring to a boil.',
      'Gradually stir in the cornmeal, reducing the heat to low. Cook, stirring constantly, until the mixture thickens and pulls away from the sides of the pan.',
      'Season with salt and pepper. Pour the mixture into a greased mold and let it cool before serving.'
    ]
  }

  const receita4 = {
    Ingredients: [
      '2 cups of roasted peanuts (unsalted)',
      '2 cups of sugar',
      '1/2 cup of water',
      '1/4 teaspoon of baking soda'
    ],
    Instructions: [
      'Line a baking sheet with parchment paper.',
      'In a heavy saucepan, combine the sugar and water. Cook over medium heat, stirring until the sugar dissolves.',
      'Increase the heat and bring the mixture to a boil. Cook without stirring until it turns a golden caramel color.',
      'Remove from heat and quickly stir in the baking soda and peanuts.',
      'Pour the mixture onto the prepared baking sheet and spread it out evenly.',
      'Allow it to cool completely before breaking it into pieces.'
    ]
  }

  return (
    <Flex px={isMobile ? 4 : 20} w={'100%'} flexDir={'column'} textAlign={'center'} p={4} bg={'#dd1818'} color={'white'} mt={10} boxShadow={isMobile ? '10px -10px 200px 30px #dd1818' : '10px -10px 200px 50px #dd1818'}>
      <Heading size={isMobile ? 'lg' : 'xl'} mt={isMobile ? -8 : 2} mb={8}>Explore Typical Recipes of Festa Junina</Heading>

      <Flex w={'100%'} flexDir={'column'}>
        <Text mt={isMobile ? -4 : -10} mb={isMobile ? 28 : 20} fontWeight={'semibold'} p={isMobile ? 0 : 10} textAlign={'center'}>
          Join us on a culinary journey through the traditional recipes of Festa Junina. Here are four classic dishes you can try at home to experience the authentic flavors of this festive Brazilian celebration.
        </Text>
      </Flex>

      <Flex px={isMobile ? 4 : 20} gap={4} flexDir={isMobile ? 'column' : 'row'}>
        <Flex mt={-20} w={'100%'} flexDir={'column'} gap={4}>
          <Flex border={'solid 4px'} rounded={'xl'} color={'white'} p={4} bg={'white'} flexDir={'column'} textAlign={'left'}>
            <Heading size={'md'} mb={4} ml={6} color={'black'} >Corn Cake (Bolo de Milho): </Heading>
            <Text color={'black'} fontWeight={'semibold'} ml={7}>A staple at any Festa Junina, this moist and flavorful cake is made with fresh corn, coconut milk, and a touch of cinnamon. It’s perfect for enjoying with a hot cup of coffee.</Text>
            <Box my={5} w={'100%'} h={0.5} bg={'#dd1818'}></Box>
            <Receita Receita={receita1} Title='Corn Cake (Bolo de Milho)'/>
          </Flex>
          <Flex border={'solid 4px'} rounded={'xl'} color={'white'} p={4} bg={'white'} flexDir={'column'} textAlign={'left'}>
            <Heading size={'md'} mb={4} ml={6} color={'black'} >Brazilian Rice Pudding (Arroz Doce): </Heading>
            <Text color={'black'} fontWeight={'semibold'} ml={7}>This creamy and sweet rice pudding is flavored with cinnamon and cloves, making it a comforting dessert for the cooler June evenings.</Text>
            <Box my={5} w={'100%'} h={0.5} bg={'#dd1818'}></Box>
            <Receita Receita={receita2} Title='Brazilian Rice Pudding (Arroz Doce)'/>
          </Flex>
        </Flex>

        <Flex w={'100%'} flexDir={'column'} gap={4}>
          <Flex border={'solid 4px'} rounded={'xl'} color={'white'} p={4} bg={'white'} flexDir={'column'} textAlign={'left'}>
            <Heading size={'md'} mb={4} ml={6} color={'black'} >Sausage with Polenta (Cuscuz Paulista): </Heading>
            <Text color={'black'} fontWeight={'semibold'} ml={7}>A savory dish made with cornmeal, sausages, and a variety of vegetables, this polenta dish is hearty and satisfying, perfect for a festive meal.</Text>
            <Box my={5} w={'100%'} h={0.5} bg={'#dd1818'}></Box>
            <Receita Receita={receita3} Title='Sausage with Polenta (Cuscuz Paulista)'/>

          </Flex>
          <Flex border={'solid 4px'} rounded={'xl'} color={'white'} p={4} bg={'white'} flexDir={'column'} textAlign={'left'}>
            <Heading size={'md'} mb={4} ml={6} color={'black'} >Peanut Candy (Pé de Moleque):  </Heading>
            <Text color={'black'} fontWeight={'semibold'} ml={7}>A crunchy and sweet treat made with peanuts and caramelized sugar, this candy is a favorite among children and adults alike during Festa Junina.</Text>
            <Box my={5} w={'100%'} h={0.5} bg={'#dd1818'}></Box>
            <Receita Receita={receita4} Title='Peanut Candy (Pé de Moleque)'/>

          </Flex>
        </Flex>
      </Flex>

      <Box boxShadow={isMobile ? '-10px -350px 200px 30px #dd1818' : '10px -10px 200px 20px #dd1818'}></Box>

    </Flex>
  )
}
