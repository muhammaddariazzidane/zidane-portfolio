import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';

export default function HeroSkeleton() {
  return (
    <Box padding="6" mt={12} mb={10}>
      <Container maxWidth={'container.lg'}>
        <SkeletonCircle mx={'auto'} size={32} />
        <Skeleton mt={4} height="20px" maxW={'lg'} w={'full'} mx={'auto'} />
        <Skeleton mt={4} height={3} w={'full'} maxWidth={'80%'} mx={'auto'} />
        <Skeleton mt={2} height={3} w={'full'} maxWidth={'30%'} mx={'auto'} />

        <Flex justify={'center'} gap={2}>
          <Skeleton mt={4} height={9} rounded={'full'} w={'full'} maxW={130} />
          <Skeleton mt={4} height={9} rounded={'full'} w={'full'} maxW={130} />
        </Flex>
        <Flex mt={1} justify={'center'} gap={2}>
          <Skeleton mt={4} height={10} rounded={'full'} w={'full'} maxW={10} />
          <Skeleton mt={4} height={10} rounded={'full'} w={'full'} maxW={10} />
          <Skeleton mt={4} height={10} rounded={'full'} w={'full'} maxW={10} />
        </Flex>
      </Container>
    </Box>
  );
}
