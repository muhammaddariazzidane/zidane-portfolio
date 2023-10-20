/* eslint-disable react/prop-types */
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import SkillsImage from '../../images/SkillsImage';
import frontEndSkills from '../../../services/frontEndSkills';
import SkillsItem from '../../SkillsItem';

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
        {frontEndSkills?.map((skill) => (
          <SkillsItem
            key={skill.id}
            skill={skill}
            Box={Box}
            SkillsImage={SkillsImage}
            motion={motion}
          />
        ))}
      </Flex>
    </Flex>
  );
}
