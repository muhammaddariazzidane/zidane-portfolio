import { Box, Center, Container, Skeleton } from '@chakra-ui/react';

export default function CertificateSkeleton() {
  return (
    <Box py={12} pos={'relative'} px={2} id={'certificate'}>
      <Container maxW={'container.lg'}>
        {location.pathname == '/' ? (
          <Skeleton
            mt={{ lg: 16 }}
            h={20}
            maxW={'48'}
            w={'full'}
            rounded={'md'}
            mx={'auto'}
            mb={5}
          />
        ) : (
          <Skeleton
            mt={{ lg: 16 }}
            h={7}
            maxW={'48'}
            w={'full'}
            rounded={'md'}
            mb={5}
          />
        )}
      </Container>
      <Container maxW={'container.lg'} px={4} mt={12}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          gap={4}
        >
          {location.pathname == '/' ? (
            <>
              <Skeleton h={'52'} maxW={'xs'} w={'full'} />
              <Skeleton h={'52'} maxW={'xs'} w={'full'} />
              <Skeleton h={'52'} maxW={'xs'} w={'full'} />
              <Skeleton h={'52'} maxW={'xs'} w={'full'} />
              <Skeleton h={'52'} maxW={'xs'} w={'full'} />
            </>
          ) : (
            <>
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
              <Skeleton h={'44'} maxW={'xs'} w={'full'} />
            </>
          )}
        </Box>
        <Center mt={7}>
          <Skeleton h={9} w={24} />
        </Center>
      </Container>
    </Box>
  );
}
