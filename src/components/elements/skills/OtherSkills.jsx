/* eslint-disable react/prop-types */
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import SkillsImage from '../../images/SkillsImage';

export default function OtherSkills({ motion }) {
  return (
    <Flex
      mt={{ lg: '20', base: '3.5' }}
      alignItems={'center'}
      justify={'space-between'}
      flexWrap={'wrap'}
    >
      <Center
        hideBelow={'lg'}
        maxW={'7rem'}
        rounded={'full'}
        w={'full'}
        bg={'#4f46e5'}
        h={10}
        as={motion.div}
        initial={{ translateX: -50, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Heading color={'white'} size={'sm'} fontStyle={'italic'}>
          Others
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
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Vscode.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Visual Studio Code'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Git.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Git'}
          />
        </Box>

        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Axios.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Axios'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Jest.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Jest'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/vitest.png'}
            size={{ lg: 12, base: 10 }}
            title={'Vitest'}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
