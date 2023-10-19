import { Box, Container, Flex, Skeleton } from '@chakra-ui/react';

export default function ContactSkeleton() {
  return (
    <Box py={12} mt={5} id={'contact'}>
      <Skeleton
        h={12}
        maxW={'40'}
        w={'full'}
        rounded={'full'}
        mx={'auto'}
        mb={5}
      />
      <Container maxW={'lg'} padding={'6'} shadow={'none'}>
        <Skeleton h={4} maxW={'24'} rounded={'full'} w={'full'} />
        <Skeleton h={9} maxW={'full'} my={3} rounded={'full'} w={'full'} />
        <Skeleton h={4} maxW={'28'} rounded={'full'} w={'full'} />
        <Skeleton h={9} maxW={'full'} my={3} rounded={'full'} w={'full'} />
        <Skeleton h={4} maxW={'28'} rounded={'full'} w={'full'} />
        <Skeleton h={20} maxW={'full'} my={3} rounded={'md'} w={'full'} />
        <Flex justify={'end'} mt={4}>
          <Skeleton h={9} maxW={'20'} rounded={'full'} w={'full'} />
        </Flex>
      </Container>
    </Box>
  );
}
