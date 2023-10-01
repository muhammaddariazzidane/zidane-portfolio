import { Box, Container, Skeleton } from '@chakra-ui/react';

export default function CertificateSkeleton() {
  return (
    <Box py={12} pos={'relative'} px={2} id={'certificate'}>
      <Container maxW={'container.lg'}>
        {location.pathname == '/' ? (
          <Skeleton
            mt={{ lg: 16 }}
            height={20}
            maxW={'48'}
            w={'full'}
            rounded={'md'}
            mx={'auto'}
            mb={5}
          />
        ) : (
          <Skeleton
            mt={{ lg: 16 }}
            height={7}
            maxW={'48'}
            w={'full'}
            rounded={'md'}
            mb={5}
          />
        )}
      </Container>
      <Container maxW={'container.lg'} mt={12}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          gap={4}
        >
          {location.pathname == '/' ? (
            <>
              <Skeleton h={'12'} mt={5} maxW={'32'} w={'full'} />
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
      </Container>
    </Box>
  );
}
