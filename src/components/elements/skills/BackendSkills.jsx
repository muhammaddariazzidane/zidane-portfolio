/* eslint-disable react/prop-types */
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import SkillsImage from '../../images/SkillsImage';
import backEndSkills from '../../../services/backEndSkills';
import SkillsItem from '../../SkillsItem';

export default function BackendSkills({ motion }) {
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
        as={motion.div}
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
        {backEndSkills?.map((skill) => (
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
