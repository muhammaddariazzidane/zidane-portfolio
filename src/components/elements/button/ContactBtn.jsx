/* eslint-disable react/prop-types */
export default function ContactBtn({ Button, ArrowForwardIcon, motion }) {
  return (
    <Button
      rightIcon={<ArrowForwardIcon boxSize={4} />}
      variant={'solid'}
      bg={'#4f46e5'}
      _hover={{ color: 'white' }}
      _active={{ bg: '#6366f1' }}
      color={'white'}
      rounded={'full'}
      as={motion.a}
      initial={{
        translateX: -50,
        opacity: 0,
      }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={`.2s linear`}
      href={'#contact'}
      whileTap={{ scale: 0.9 }}
      aria-label={'contact'}
    >
      Contact Me
    </Button>
  );
}
