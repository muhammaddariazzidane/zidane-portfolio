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
  const { title, image, description, techStack, demo, repo } = project;

  return (
    <Card
      as={motion.div}
      maxW={'xs'}
      w={'full'}
      _dark={{
        bg: 'gray.900',
        _hover: {
          shadow: 'xl',
          transition: '.5s',
        },
      }}
      rounded={'md'}
      border={0}
      shadow={'md'}
      _hover={{ shadow: 'xl' }}
      transition={'.2s'}
    >
      <CardBody p={4} onClick={() => handleProjectClick(project)}>
        <Box h={'40'} p={0} rounded={'md'} overflow={'hidden'}>
          <Image
            cursor={'pointer'}
            src={image}
            alt={image}
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
          <Heading size={'md'} cursor={'pointer'}>
            {title}
          </Heading>
          <Flex gap={2} onClick={(e) => e.stopPropagation()}>
            {techStack?.map((tech) => (
              <SkillsImage image={tech.tech} size={6} key={tech.id} />
            ))}
          </Flex>
          <Text onClick={(e) => e.stopPropagation()}>
            {description.substring(0, 70)}
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
          variant={'ghost'}
          color={'#6366f1'}
          as={motion.a}
          bg={'transparent'}
          whileTap={{ scale: 0.9 }}
          transition={'.2s linear'}
          href={demo}
          aria-label={`demo project ${title}`}
          target={'_blank'}
          _hover={{ bg: 'gray.200', _dark: { bg: 'gray.700', color: 'cyan' } }}
        >
          Live demo
        </Button>
        <motion.a
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ ease: 'easeInOut' }}
          target={'_blank'}
          href={repo}
          aria-label={repo}
        >
          <FaGithub size={24} />
        </motion.a>
      </CardFooter>
    </Card>
  );
}
