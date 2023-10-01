import {
  AbsoluteCenter,
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';
import { lazy } from 'react';
const Experience = lazy(() => import('./Experience'));

export default function About() {
  return (
    <Box py={{ lg: 12, base: 28 }} mt={5} pos={'relative'} id={'about'}>
      <Heading
        pos={'absolute'}
        left={0}
        right={0}
        zIndex={'9'}
        textAlign={'center'}
        size={'lg'}
        as={motion.h1}
        initial={{ translateY: 100 }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </Heading>
      <AbsoluteCenter
        rounded={5}
        bgGradient={'linear(to-b, #e0e7ff, white, white)'}
        _dark={{ bgGradient: 'linear(to-b, #1e1b4b, gray.800, gray.800)' }}
        zIndex={1}
        top={{ lg: 16, base: 32 }}
        pt="5"
        pb={14}
        axis="both"
        maxW={'36'}
        w={'50%'}
      ></AbsoluteCenter>
      <Container
        mt={'24'}
        as={motion.div}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        maxW={'container.lg'}
        px={6}
      >
        <Flex
          justify={'center'}
          alignItems={'center'}
          flexWrap={{
            base: 'wrap',
            sm: 'wrap',
            md: 'nowrap',
            lg: 'nowrap',
            xl: 'nowrap',
          }}
          gap={4}
        >
          <Box w={'full'} maxW={'xs'}>
            <Center>
              <Avatar
                style={{ rotate: '1.4deg' }}
                size={'2xl'}
                name={'Muhammad Dariaz Zidane'}
                src={'my.png'}
              />
            </Center>
          </Box>
          <Box w={'full'} maxW={'full'}>
            <Text as={'p'} fontSize={'md'}>
              My name is Muhammad Dariaz Zidane. Currently, I reside in
              Karawang, West Java. I am a 21-year-old student at Bina Sarana
              Informatika University. My expertise lies in web development,
              particularly in full-stack web development. I am highly motivated
              to learn and enhance my skills in these fields, constantly seeking
              new and exciting projects to work on. I stay updated with industry
              advancements and continuously improve my skills through online
              learning platforms and YouTube.
            </Text>
            <Flex mt={3} gap={2} flexWrap={'wrap'}>
              <Flex gap={1} alignItems={'center'}>
                <MdOutlineMailOutline size={28} />
                <Text as={'p'}>dariazzidane@gmail.com</Text>
              </Flex>
              <Flex gap={1} alignItems={'center'}>
                <FaLinkedin size={24} />
                <Text as={'p'}>Muhammad Dariaz Zidane</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Container mt={{ lg: '16', base: '12' }} maxW={'container.md'} px={6}>
        <Flex
          as={motion.div}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          gap={4}
          flexWrap={'wrap'}
          justify={'space-around'}
        >
          <Experience />
        </Flex>
      </Container>
    </Box>
  );
}
