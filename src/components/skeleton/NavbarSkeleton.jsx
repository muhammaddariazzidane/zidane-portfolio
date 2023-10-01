import { Box, Flex, Container, Skeleton, Progress } from '@chakra-ui/react';
export default function NavbarSkeleton() {
  return (
    <Box shadow={'md'} w={'100%'}>
      <Progress size="xs" colorScheme={'purple'} isIndeterminate />
      <Container maxW={'container.lg'} py={7}>
        <Flex justify={'space-between'} alignItems={'center'}>
          <Skeleton ml={2} h={8} maxW={40} rounded={'full'} w={'full'} />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            ml={44}
            maxW={16}
            w={'full'}
          />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            maxW={16}
            w={'full'}
          />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            maxW={16}
            w={'full'}
          />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            maxW={16}
            w={'full'}
          />
          <Skeleton
            h={7}
            mr={20}
            rounded={'full'}
            hideBelow={'md'}
            maxW={16}
            w={'full'}
          />
          <Skeleton
            h={7}
            maxW={7}
            rounded={{ lg: 'full', md: 'md', sm: 'md', base: 'md' }}
            w={'full'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
