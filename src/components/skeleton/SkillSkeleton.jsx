import {
  Box,
  Center,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';

export default function SkillSkeleton() {
  return (
    <Box py={12} mt={5} pos={'relative'} id="skills">
      <Skeleton h={14} maxW={40} w={'full'} mx={'auto'} />

      <Container
        maxW={{
          md: 'container.md',
          lg: 'container.lg',
          base: 'container.lg',
        }}
        w={'full'}
      >
        <Flex mt={'20'} justify={'space-between'} flexWrap={'wrap'}>
          <Center hideBelow={'lg'} maxW={'8rem'} w={'full'} p={2} h={12}>
            <Skeleton
              h={50}
              rounded={'full'}
              maxW={40}
              w={'full'}
              mx={'auto'}
            />
          </Center>
          <Flex
            maxW={'52rem'}
            width={'full'}
            justify={{ base: 'center', lg: 'start', md: 'center' }}
            gap="7"
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
          </Flex>
        </Flex>
        <Flex
          marginTop={{ lg: '16', base: '3.5' }}
          justify={'space-between'}
          flexWrap={'wrap'}
        >
          <Center
            hideBelow={'lg'}
            maxW={'8rem'}
            width={'full'}
            padding={2}
            h={12}
          >
            <Skeleton
              h={50}
              rounded={'full'}
              maxW={40}
              w={'full'}
              mx={'auto'}
            />
          </Center>
          <Flex
            maxW={'52rem'}
            width={'full'}
            justify={{ base: 'center', lg: 'start', md: 'center' }}
            gap="7"
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
          </Flex>
        </Flex>
        <Flex
          marginTop={{ lg: '16', base: '3.5' }}
          justify={'space-between'}
          flexWrap={'wrap'}
        >
          <Center
            hideBelow={'lg'}
            maxW={'8rem'}
            width={'full'}
            padding={2}
            h={12}
          >
            <Skeleton
              h={50}
              rounded={'full'}
              maxW={40}
              w={'full'}
              mx={'auto'}
            />
          </Center>
          <Flex
            maxW={'52rem'}
            width={'full'}
            justify={{ base: 'center', lg: 'start', md: 'center' }}
            gap="7"
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
            <SkeletonCircle size={{ lg: 12, base: 10 }} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
