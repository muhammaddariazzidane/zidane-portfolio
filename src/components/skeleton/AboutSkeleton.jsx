import { Box, Container, Skeleton } from '@chakra-ui/react';

export default function AboutSkeleton() {
  return (
    <Box py={{ lg: 12, base: 28 }} id={'about'}>
      <Container maxW={'container.lg'}>
        <Skeleton
          mt={{ lg: 16 }}
          h={16}
          maxW={'44'}
          w={'full'}
          rounded={'md'}
          mx={'auto'}
          mb={5}
        />
        <Skeleton h={'60'} />
      </Container>
      <Box
        px={12}
        mt={'6'}
        justify={'center'}
        flexWrap={'wrap'}
        display={'flex'}
        gap={4}
      >
        <Skeleton
          maxW={'sm'}
          rounded={'md'}
          w={'full'}
          minH={'60'}
          h={'full'}
        />
        <Skeleton
          maxW={'sm'}
          rounded={'md'}
          w={'full'}
          minH={'60'}
          h={'full'}
        />
      </Box>
    </Box>
  );
}
