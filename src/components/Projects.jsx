/* eslint-disable react/no-unescaped-entities */
import {
  Heading,
  Flex,
  Box,
  useDisclosure,
  AbsoluteCenter,
} from '@chakra-ui/react';
import { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import projects from '../services/projects';
const ProjectModal = lazy(() => import('./elements/modal/ProjectModal'));
const ProjectsCard = lazy(() => import('./elements/card/ProjectsCard'));

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box py={12} pos={'relative'} px={2} id={'projects'}>
      <Heading
        pos={'absolute'}
        left={0}
        right={0}
        zIndex={'9'}
        textAlign={'center'}
        size={'lg'}
        as={motion.h1}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Recent's Projects
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
        maxW={'60'}
        w={'50%'}
      ></AbsoluteCenter>
      <Flex
        as={motion.div}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        flexWrap={'wrap'}
        mt={'24'}
        gap={2}
        justify={'center'}
      >
        {projects?.map((project, i) => (
          <div key={i}>
            <ProjectsCard
              motion={motion}
              project={project}
              handleProjectClick={handleProjectClick}
            />
            <ProjectModal
              selectedProject={selectedProject}
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
            />
          </div>
        ))}
      </Flex>
    </Box>
  );
}
