import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon, DownloadIcon } from '@chakra-ui/icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { lazy } from 'react';
const ContactBtn = lazy(() => import('./elements/button/ContactBtn'));
const DownloadCVBtn = lazy(() => import('./elements/button/DownloadCVBtn'));
const LinkedinIcon = lazy(() => import('./elements/icon/LinkedinIcon'));
const InstagramIcon = lazy(() => import('./elements/icon/InstagramIcon'));
const GithubIcon = lazy(() => import('./elements/icon/GithubIcon'));

export default function Hero() {
  return (
    <Box py={12}>
      <Container maxW={'container.lg'}>
        <Center
          as={motion.div}
          initial={{ translateY: -50 }}
          animate={{ translateY: 0 }}
        >
          <Avatar
            style={{ rotate: '1.4deg' }}
            size={'2xl'}
            name={'Muhammad Dariaz Zidane'}
            src={'my.png'}
          />
        </Center>
        <Heading
          textAlign={'center'}
          mt={4}
          mb={5}
          size={'lg'}
          as={motion.h1}
          initial={{ translateY: -50, opacity: 0, transition: { delay: 0.3 } }}
          animate={{ translateY: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          Muhammad Dariaz Zidane
        </Heading>
        <Box maxW={'container.md'} mx={'auto'}>
          <Text
            textAlign={'center'}
            as={motion.p}
            initial={{ translateY: -50, transition: { delay: 0.1 } }}
            animate={{ translateY: 0, transition: { delay: 0.1 } }}
            fontWeight={600}
          >
            I have experience in web development, leveraging Laravel,
            CodeIgniter, and ReactJS to create versatile and user-friendly web
            applications.
          </Text>
        </Box>
        <Stack direction="row" justify={'center'} spacing={4} my={5}>
          <ContactBtn
            ArrowForwardIcon={ArrowForwardIcon}
            Button={Button}
            motion={motion}
          />
          <DownloadCVBtn
            Button={Button}
            motion={motion}
            DownloadIcon={DownloadIcon}
          />
        </Stack>
        <Flex mt={7} gap={2} justify={'center'}>
          <GithubIcon
            motion={motion}
            FaGithub={FaGithub}
            IconButton={IconButton}
          />
          <LinkedinIcon
            motion={motion}
            FaLinkedin={FaLinkedin}
            IconButton={IconButton}
          />
          <InstagramIcon
            motion={motion}
            FaInstagram={FaInstagram}
            IconButton={IconButton}
          />
        </Flex>
      </Container>
    </Box>
  );
}
