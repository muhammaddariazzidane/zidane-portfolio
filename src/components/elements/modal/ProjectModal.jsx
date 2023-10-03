/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  Text,
  Image,
  Box,
  Flex,
  Kbd,
} from '@chakra-ui/react';
import SkillsImage from '../../images/SkillsImage';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

export default function ProjectModal(props) {
  const { onClose, isOpen, selectedProject, motion } = props;

  if (!selectedProject) {
    return null;
  }
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInTop"
      closeOnEsc={true}
      size={'2xl'}
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Box pt={2} pb={3}>
            <Image
              src={selectedProject.image}
              rounded={'md'}
              objectFit={'contain'}
              alt={selectedProject.image}
              loading={'lazy'}
            />
          </Box>
          <Text as={'b'} fontSize={'2xl'}>
            {selectedProject.title}
          </Text>
          <Flex my={3} gap={2}>
            {selectedProject.techStack.map((tech, i) => (
              <SkillsImage image={tech.tech} size={7} key={i} />
            ))}
          </Flex>
          <Text fontSize={'md'}>{selectedProject.description}</Text>
        </ModalBody>
        <ModalFooter gap={2} flex justifyContent={'space-between'}>
          <Flex gap={1} alignItems={'end'}>
            <Kbd>ESC</Kbd>
            <Text fontSize={'sm'} as={'p'}>
              to close
            </Text>
          </Flex>
          <Flex gap={2} alignItems={'center'}>
            <Box
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: 'easeInOut' }}
              target={'_blank'}
              as={motion.a}
              aria-label={selectedProject.repo}
              href={selectedProject.repo}
            >
              <FaGithub size={26} />
            </Box>
            <Box
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: 'easeInOut' }}
              target={'_blank'}
              as={motion.a}
              aria-label={selectedProject.demo}
              href={selectedProject.demo}
            >
              <BiLinkExternal size={26} />
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
