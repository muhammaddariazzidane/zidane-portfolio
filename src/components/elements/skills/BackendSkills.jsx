/* eslint-disable react/prop-types */
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import SkillsImage from '../../images/SkillsImage';

export default function BackendSkills(props) {
  return (
    <Flex
      mt={{ lg: '16', base: '3.5' }}
      justify={'space-between'}
      flexWrap={'wrap'}
    >
      <Center
        hideBelow={'lg'}
        maxW={'7rem'}
        rounded={'full'}
        w={'full'}
        bg="#4f46e5"
        h={10}
        as={props.motion.div}
        initial={{ translateX: -50, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Heading color={'white'} size={'sm'} fontStyle={'italic'}>
          Back-end
        </Heading>
      </Center>
      <Flex
        maxW={'52rem'}
        w={'full'}
        justify={{ base: 'center', lg: 'start', md: 'center' }}
        gap="7"
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Py.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Python'}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Php.svg'}
            size={{ lg: 12, base: 10 }}
            title={'PHP'}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Mysql.svg'}
            size={{ lg: 12, base: 10 }}
            title={'MySQL'}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Expressjs.png'}
            size={{ lg: 12, base: 10 }}
            title={'Express js'}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Flask.webp'}
            size={{ lg: 12, base: 10 }}
            title={'Flask'}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Ci.webp'}
            size={{ lg: 12, base: 10 }}
            title={'Codeigniter'}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          _dark={{ color: 'red' }}
        >
          <SkillsImage
            image={'icons/Laravel.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Laravel'}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Nodejs.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Node js'}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
