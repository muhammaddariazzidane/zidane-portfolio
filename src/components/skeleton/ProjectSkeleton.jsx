/* eslint-disable react/no-unescaped-entities */
import { Box, Skeleton } from '@chakra-ui/react';

export default function ProjectSkeleton() {
  return (
    <Box py={12} pos={'relative'} px={2} id={'projects'}>
      <Skeleton h={'20'} maxW={'60'} w={'full'} mx={'auto'} />
      <Box
        px={12}
        mt={'24'}
        flexWrap={'wrap'}
        justify={'center'}
        display={'flex'}
        gap={4}
      >
        <Skeleton
          maxW={'xs'}
          w={'full'}
          rounded={'md'}
          minH={'72'}
          h={'full'}
        />
        <Skeleton
          maxW={'xs'}
          w={'full'}
          rounded={'md'}
          minH={'72'}
          h={'full'}
        />
        <Skeleton
          maxW={'xs'}
          w={'full'}
          rounded={'md'}
          minH={'72'}
          h={'full'}
        />
      </Box>
    </Box>
  );
}
