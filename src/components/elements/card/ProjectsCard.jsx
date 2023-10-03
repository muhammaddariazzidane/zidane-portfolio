/* eslint-disable react/prop-types */
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import SkillsImage from '../../images/SkillsImage';

export default function ProjectsCard(props) {
  const { handleProjectClick, motion, project } = props;

  return (
    <Card
      as={motion.div}
      maxW={'xs'}
      w={'full'}
      _dark={{
        bg: 'gray.900',
        _hover: {
          shadow: 'xl',
          transform: 'scale(0.9)',
          transition: '.5s',
        },
      }}
      rounded={'md'}
      border={0}
      shadow={'md'}
      cursor={'pointer'}
      _hover={{ shadow: 'xl' }}
      transition={'.2s'}
      onClick={() => handleProjectClick(project)}
    >
      <CardBody p={4}>
        <Box h={'40'} p={0} rounded={'md'} overflow={'hidden'}>
          <Image
            src={project.image}
            alt={project.image}
            rounded={'lg'}
            h={'full'}
            w={'full'}
            objectFit={'cover'}
            className={'image-zoom'}
            filter={'grayscale(100%)'}
            _hover={{
              filter: 'grayscale(0%)',
              transition: 'all .5s ease-in-out',
            }}
            loading={'lazy'}
          />
        </Box>
        <Stack mt={'3'} spacing={'3'} justify={'end'}>
          <Heading size={'md'}>{project.title}</Heading>
          <Flex gap={2}>
            {project.techStack.map((tech, i) => (
              <SkillsImage image={tech.tech} size={6} key={i} />
            ))}
          </Flex>
          <Text>
            {project.description.substring(0, 70)}
            ...
          </Text>
        </Stack>
      </CardBody>
      <CardFooter
        display={'flex'}
        alignItems={'center'}
        justify={'space-between'}
        mt={'-5'}
        mb={'-2'}
      >
        <Button
          ml={'-3'}
          rightIcon={<ArrowForwardIcon boxSize={4} />}
          variant={'solid'}
          color={'#6366f1'}
          as={motion.a}
          bg={'transparent'}
          whileTap={{ scale: 0.9 }}
          transition=".2s linear"
          href={project.demo}
          aria-label={`demo project ${project.title}`}
          target="_blank"
          _dark={{ _hover: { color: 'cyan' } }}
        >
          Live demo
        </Button>
        <motion.a
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ ease: 'easeInOut' }}
          target="_blank"
          href={project.repo}
          aria-label={project.repo}
        >
          <FaGithub size={24} />
        </motion.a>
      </CardFooter>
    </Card>
  );
}
