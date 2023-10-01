import { Box, Container, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box w={'full'} mt={12} roundedTop={'md'} py={5} bg={'#4f46e5'}>
      <Container maxW={'container.lg'} textAlign={'center'} w={'full'}>
        <Text color={'white'}>
          {' '}
          Muhammad Dariaz Zidane. All rights reserved. Made with ❤️ in Karawang.
        </Text>
      </Container>
    </Box>
  );
}
