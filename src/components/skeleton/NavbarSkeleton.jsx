import { Box, Flex, Container, Skeleton, Progress } from '@chakra-ui/react';
export default function NavbarSkeleton() {
  return (
    <Box shadow={'md'} w={'100%'}>
      <Progress size="xs" colorScheme={'purple'} isIndeterminate />
      <Container maxW={'container.lg'} py={{ lg: 5, base: 4 }}>
        <Flex justify={'space-between'} alignItems={'center'}>
          <Skeleton ml={2} h={8} maxW={64} rounded={'full'} w={'full'} />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            ml={24}
            maxW={14}
            w={'full'}
          />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            maxW={14}
            w={'full'}
          />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            maxW={14}
            w={'full'}
          />
          <Skeleton
            h={7}
            hideBelow={'md'}
            rounded={'full'}
            maxW={14}
            w={'full'}
          />
          <Skeleton
            h={7}
            mr={28}
            rounded={'full'}
            hideBelow={'md'}
            maxW={14}
            w={'full'}
          />
          <Skeleton
            h={8}
            maxW={8}
            mr={{ lg: 2, base: 1 }}
            rounded={{ lg: 'full', md: 'md', sm: 'md', base: 'md' }}
            w={'full'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
