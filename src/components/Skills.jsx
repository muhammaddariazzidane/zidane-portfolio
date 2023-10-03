import { Box, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HeadingTitle from './elements/Heading/HeadingTitle';
import FrontendSkills from './elements/skills/FrontendSkills';
import BackendSkills from './elements/skills/BackendSkills';
import OtherSkills from './elements/skills/OtherSkills';

export default function Skills() {
  return (
    <Box py={{ lg: 12, base: 24 }} mt={5} pos={'relative'} id={'skills'}>
      <HeadingTitle motion={motion} title={'Tech Stack'} />
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
