/* eslint-disable react/prop-types */
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import SkillsImage from '../../images/SkillsImage';

export default function FrontendSkills(props) {
  return (
    <Flex mt={'24'} justify={'space-between'} flexWrap={'wrap'}>
      <Center
        hideBelow={'lg'}
        maxW={'7rem'}
        rounded={'full'}
        w={'full'}
        bg={'#4f46e5'}
        h={10}
        as={props.motion.div}
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
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{
            translateY: 0,
          }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Html.svg'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Css.svg'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          borderRadius={20}
        >
          <SkillsImage image={'icons/Js.svg'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Bootstrap.svg'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Tailwind.svg'} size={14} />
        </Box>

        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage
            image={'icons/Chakraui.png'}
            rounded={'full'}
            size={14}
          />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Daisyui.svg'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/React.svg'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Alpinejs.png'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Vercel.svg'} size={14} />
        </Box>
        <Box
          as={props.motion.div}
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
        >
          <SkillsImage image={'icons/Netlify.svg'} size={14} />
        </Box>
      </Flex>
    </Flex>
  );
}
