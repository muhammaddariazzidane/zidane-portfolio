/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageNotFound() {
  return (
    <Container maxW={'container.lg'} minH={'100vh'} mx={'auto'}>
      <Box py={'32'}>
        <Flex justify={'center'} alignItems={'center'}>
          <Box textAlign={'end'} w={'full'}>
            <Heading as={'h1'} fontSize={'6xl'} textColor={'red.500'}>
              404
            </Heading>
          </Box>
          <Box w={'full'}>
            <Text fontSize={'xl'} fontWeight={'semibold'}>
              Errors
            </Text>
          </Box>
        </Flex>
        <Flex
          justify={'center'}
          flexWrap={'wrap'}
          mt={'-5'}
          alignItems={'center'}
        >
          <Box textAlign={'center'} w={'full'} maxW={'xs'}>
            <Heading fontSize={'7xl'}>OH NO!</Heading>
          </Box>
          <Box w={'full'} ml={'-6'} maxW={'xs'}>
            <Text
              fontSize={'2xl'}
              textColor={'red.500'}
              fontWeight={'semibold'}
              textAlign={{ lg: 'start', base: 'center' }}
            >
              But that's okay!
            </Text>
          </Box>
        </Flex>
        <Flex justify={'center'} mt={'7'}>
          <Button
            as={motion.button}
            initial={{ opacity: 0, translateY: 200 }}
            animate={{ opacity: 1, translateY: 0 }}
            variant={'solid'}
            _light={{ color: 'white', _hover: { color: 'black' } }}
            bg={'red.600'}
          >
            <Link to={'/'}>Back to home</Link>
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
