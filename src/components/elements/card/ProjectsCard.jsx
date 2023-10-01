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
  return (
    <Card
      as={props.motion.div}
      maxW={'sm'}
      w={'full'}
      _dark={{ bg: 'gray.800', _hover: { shadow: 'xl' } }}
      rounded={'md'}
      border={0}
      shadow={'md'}
      cursor={'pointer'}
      _hover={{ shadow: 'xl' }}
      transition={'.2s'}
      onClick={() => props.handleProjectClick(props.project)}
    >
      <CardBody>
        <Box h={'40'}>
          <Image
            src={props.project.image}
            alt={props.project.image}
            rounded={'lg'}
            h={'full'}
            w={'full'}
            objectFit={'cover'}
          />
        </Box>
        <Stack mt="6" spacing="3" justify={'end'}>
          <Heading size="md">{props.project.title}</Heading>
          <Flex gap={2}>
            {props.project.techStack.map((tech, i) => (
              <SkillsImage image={tech.tech} size={7} key={i} />
            ))}
          </Flex>
          <Text>
            {props.project.description.substring(0, 90)}
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
          borderColor={'#6366f1'}
          as={props.motion.a}
          bg={'transparent'}
          whileTap={{ scale: 0.9 }}
          transition=".2s linear"
          href={props.project.demo}
          aria-label={`demo project ${props.project.title}`}
          target="_blank"
        >
          Live demo
        </Button>
        <props.motion.a
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ ease: 'easeInOut' }}
          target="_blank"
          href={props.project.repo}
          aria-label={props.project.repo}
        >
          <FaGithub size={20} />
        </props.motion.a>
      </CardFooter>
    </Card>
  );
}
