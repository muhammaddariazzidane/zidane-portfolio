/* eslint-disable react/no-unescaped-entities */
import { Flex, Box, useDisclosure } from '@chakra-ui/react';
import { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import projects from '../services/projects';
import HeadingTitle from './elements/Heading/HeadingTitle';
import ProjectModal from './elements/modal/ProjectModal';
const ProjectsCard = lazy(() => import('./elements/card/ProjectsCard'));

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box
      py={{ lg: 12, base: 24 }}
      mt={5}
      pos={'relative'}
      px={2}
      id={'projects'}
    >
      <HeadingTitle
        motion={motion}
        title={"Recent's Projects"}
        size={{ lg: 56, base: 52 }}
      />
      <Flex
        as={motion.div}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        flexWrap={'wrap'}
        mt={24}
        gap={5}
        justify={'center'}
      >
        {projects?.map((project, index) => (
          <div key={index}>
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
              motion={motion}
            />
          </div>
        ))}
      </Flex>
    </Box>
  );
}
