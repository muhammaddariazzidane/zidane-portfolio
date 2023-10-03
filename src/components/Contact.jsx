import { Box, Button, Container, Flex, useToast } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { sendEmail } from '../store/sendEmail';
import ContactInput from './elements/input/ContactInput';
import HeadingTitle from '../components/elements/Heading/HeadingTitle';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendEmail(
      form.current,
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
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
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box py={{ lg: 12, base: 24 }} mt={5} pos={'relative'} id={'contact'}>
      <HeadingTitle motion={motion} title={'Contact Me'} size={40} />
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
