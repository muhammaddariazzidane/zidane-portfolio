/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Skeleton } from '@chakra-ui/react';

export default function ProjectSkeleton() {
  return (
    <Box py={12} pos={'relative'} px={2} id={'projects'}>
      <Skeleton h={'20'} maxW={'60'} rounded={'md'} w={'full'} mx={'auto'} />
      <Container
        px={{ lg: 32, base: 8 }}
        mt={'20'}
        flexWrap={'wrap'}
        justify={'center'}
        display={'flex'}
        gap={5}
        maxW={'container.xl'}
      >
        <Skeleton
          maxW={'xs'}
          w={'full'}
          rounded={'md'}
          minH={'72'}
          h={'full'}
          mx={'auto'}
        />
        <Skeleton
          maxW={'xs'}
          w={'full'}
          rounded={'md'}
          minH={'72'}
          h={'full'}
          mx={'auto'}
        />
        <Skeleton
          maxW={'xs'}
          w={'full'}
          rounded={'md'}
          minH={'72'}
          h={'full'}
          mx={'auto'}
        />
      </Container>
    </Box>
  );
}
