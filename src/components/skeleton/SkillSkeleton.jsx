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
    <Box paddingY={12} mt={5} pos={'relative'} id="skills">
      <Skeleton height={50} maxW={40} w={'full'} mx={'auto'} />

      <Container
        maxWidth={{
          md: 'container.md',
          lg: 'container.lg',
          base: 'container.lg',
        }}
        width={'full'}
      >
        <Flex
          marginTop={'24'}
          justifyContent={'space-between'}
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
              height={50}
              rounded={'full'}
              maxW={40}
              w={'full'}
              mx={'auto'}
            />
          </Center>
          <Flex
            maxWidth={'52rem'}
            width={'full'}
            justifyContent={{ base: 'center', lg: 'start', md: 'center' }}
            gap="7"
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
          </Flex>
        </Flex>
        <Flex
          marginTop={{ lg: '16', base: '3.5' }}
          justifyContent={'space-between'}
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
              height={50}
              rounded={'full'}
              maxW={40}
              w={'full'}
              mx={'auto'}
            />
          </Center>
          <Flex
            maxWidth={'52rem'}
            width={'full'}
            justifyContent={{ base: 'center', lg: 'start', md: 'center' }}
            gap="7"
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
          </Flex>
        </Flex>
        <Flex
          marginTop={{ lg: '16', base: '3.5' }}
          justifyContent={'space-between'}
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
              height={50}
              rounded={'full'}
              maxW={40}
              w={'full'}
              mx={'auto'}
            />
          </Center>
          <Flex
            maxWidth={'52rem'}
            width={'full'}
            justifyContent={{ base: 'center', lg: 'start', md: 'center' }}
            gap="7"
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
            <SkeletonCircle size={12} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
