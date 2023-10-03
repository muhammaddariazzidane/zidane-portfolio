/* eslint-disable react/prop-types */
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import SkillsImage from '../../images/SkillsImage';

export default function FrontendSkills({ motion }) {
  return (
    <Flex mt={'24'} justify={'space-between'} flexWrap={'wrap'}>
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
          Front-end
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
          whileInView={{
            translateY: 0,
          }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Html.svg'}
            size={{ lg: 12, base: 10 }}
            title={'HTML'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Css.svg'}
            size={{ lg: 12, base: 10 }}
            title={'CSS'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          borderRadius={20}
        >
          <SkillsImage
            image={'icons/Js.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Javascript'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Bootstrap.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Bootstrap '}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Tailwind.svg'}
            size={{ lg: 12, base: 10 }}
            title={'TailwindCSS'}
          />
        </Box>

        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Chakraui.png'}
            rounded={'full'}
            size={{ lg: 12, base: 10 }}
            title={'Chakra-ui'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Daisyui.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Daisyui'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/React.svg'}
            size={{ lg: 12, base: 10 }}
            title={'React js'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Alpinejs.png'}
            size={{ lg: 12, base: 10 }}
            title={'Alpine js'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Vercel.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Vercel'}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Netlify.svg'}
            size={{ lg: 12, base: 10 }}
            title={'Netlify'}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
