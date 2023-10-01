/* eslint-disable react/prop-types */
export default function InstagramIcon({ IconButton, motion, FaInstagram }) {
  return (
    <IconButton
      as={motion.a}
      initial={{
        translateX: 50,
        opacity: 0,
      }}
      animate={{ translateX: 0, opacity: 1 }}
      transitionDuration="linear"
      href="https://www.linkedin.com/in/muhammad-dariaz-zidane/"
      target="_blank"
      variant="outline"
      colorScheme="linkedin"
      aria-label="Linkedin"
      isRound
      color={'red'}
      border={0}
      boxShadow={'0px 2px 4px #6366f1'}
      _dark={{
        color: 'white',
        boxShadow: '0px 2px 4px #6366f1',
        _hover: { color: 'red', bg: 'white', transition: '.5s' },
      }}
      icon={<FaInstagram size={23} />}
      title="Instagram"
    />
  );
}
