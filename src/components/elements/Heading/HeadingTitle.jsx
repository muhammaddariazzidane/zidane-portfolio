/* eslint-disable react/prop-types */
import { AbsoluteCenter, Heading } from '@chakra-ui/react';

export default function HeadingTitle(props) {
  const { motion, title, size } = props;
  return (
    <>
      <Heading
        pos={'absolute'}
        left={0}
        right={0}
        zIndex={'9'}
        textAlign={'center'}
        as={motion.h1}
        initial={{ translateY: 100 }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
        fontSize={'2xl'}
      >
        {title}
      </Heading>
      <AbsoluteCenter
        rounded={5}
        bgGradient={'linear(to-b, #e0e7ff, white, white)'}
        _dark={{ bgGradient: 'linear(to-b, #1e1b4b, gray.800, gray.800)' }}
        zIndex={1}
        top={{ lg: 16, base: 28 }}
        pt="5"
        pb={14}
        axis={'both'}
        maxW={size ? size : 36}
        w={'full'}
      ></AbsoluteCenter>
    </>
  );
}
