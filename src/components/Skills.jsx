import { AbsoluteCenter, Box, Container, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { lazy } from 'react';
const FrontendSkills = lazy(() => import('./elements/skills/FrontendSkills'));
const BackendSkills = lazy(() => import('./elements/skills/BackendSkills'));
const OtherSkills = lazy(() => import('./elements/skills/OtherSkills'));

export default function Skills() {
  return (
    <Box py={12} mt={5} pos={'relative'} id="skills">
      <Heading
        as={motion.h1}
        pos={'absolute'}
        left={0}
        right={0}
        zIndex={'9'}
        textAlign={'center'}
        size={'lg'}
        initial={{ translateY: 100 }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </Heading>
      <AbsoluteCenter
        rounded={5}
        bgGradient={'linear(to-b, #e0e7ff, white, white)'}
        _dark={{ bgGradient: 'linear(to-b, #1e1b4b, gray.800, gray.800)' }}
        zIndex={1}
        top={16}
        pt="5"
        pb={16}
        axis="both"
        maxW={'36'}
        w={'50%'}
      ></AbsoluteCenter>
      <Container
        maxW={{
          md: 'container.md',
          lg: 'container.lg',
          base: 'container.lg',
        }}
        w={'full'}
      >
        <FrontendSkills motion={motion} />
        <BackendSkills motion={motion} />
        <OtherSkills motion={motion} />
      </Container>
    </Box>
  );
}
