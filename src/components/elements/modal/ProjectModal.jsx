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
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

export default function ProjectModal(props) {
  if (!props.selectedProject) {
    return null;
  }
  return (
    <Modal
      isCentered
      onClose={props.onClose}
      isOpen={props.isOpen}
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
              src={props.selectedProject.image}
              rounded={'md'}
              objectFit={'contain'}
              alt={props.selectedProject.image}
            />
          </Box>
          <Text as={'b'} fontSize={'2xl'}>
            {props.selectedProject.title}
          </Text>
          <Flex my={3} gap={2}>
            {props.selectedProject.techStack.map((tech, i) => (
              <SkillsImage image={tech.tech} size={7} key={i} />
            ))}
          </Flex>
          <Text fontSize={'md'}>{props.selectedProject.description}</Text>
        </ModalBody>
        <ModalFooter gap={2} flex justifyContent={'space-between'}>
          <Flex gap={1} alignItems={'end'}>
            <Kbd>ESC</Kbd>
            <Text fontSize={'sm'} as={'p'}>
              to close
            </Text>
          </Flex>
          <Flex gap={2} alignItems={'center'}>
            <motion.a
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: 'easeInOut' }}
              target={'_blank'}
              aria-label={props.selectedProject.repo}
              href={props.selectedProject.repo}
            >
              <FaGithub size={26} />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: 'easeInOut' }}
              target="_blank"
              aria-label={props.selectedProject.demo}
              href={props.selectedProject.demo}
            >
              <BiLinkExternal size={26} />
            </motion.a>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
