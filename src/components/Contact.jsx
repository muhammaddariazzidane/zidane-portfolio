import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ContactInput from './elements/input/ContactInput';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        toast({
          position: 'top',
          title: 'Success sending the message',
          description: 'Thank you for getting in touch with me.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          position: 'top',
          title: 'Error!',
          description: error,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box py={12} mt={5} pos={'relative'} id={'contact'}>
      <Heading
        as={motion.h1}
        initial={{ translateY: 100 }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
        pos={'absolute'}
        left={0}
        right={0}
        zIndex={'9'}
        textAlign={'center'}
        size={'lg'}
      >
        Contact me
      </Heading>
      <AbsoluteCenter
        rounded={5}
        bgGradient={'linear(to-b, #e0e7ff, white, white)'}
        _dark={{ bgGradient: 'linear(to-b, #1e1b4b, gray.800, gray.800)' }}
        zIndex={1}
        top={16}
        pt="5"
        pb={16}
        axis="both"
        maxW={'40'}
        w={'50%'}
      ></AbsoluteCenter>
      <Container
        mt={'24'}
        maxW={'lg'}
        p={'6'}
        shadow={'md'}
        rounded={'md'}
        ref={form}
        onSubmit={handleSubmit}
        as={motion.form}
        initial={{ translateY: 100 }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
      >
        <ContactInput />
        <Flex justify={'end'} mt={4}>
          {isLoading ? (
            <Button
              isLoading
              colorScheme="messenger"
              rounded={'full'}
              loadingText="processing"
            />
          ) : (
            <Button
              as={motion.button}
              variant={'solid'}
              bg={'#4f46e5'}
              _hover={{ color: 'white' }}
              _active={{ bg: '#6366f1' }}
              color={'white'}
              rounded={'full'}
              border={0}
              type={'submit'}
              rightIcon={<AiOutlineSend />}
              whileTap={{ scale: 0.9 }}
              onTapStart={() => {}}
              onTapEnd={() => {}}
            >
              Send
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
}
