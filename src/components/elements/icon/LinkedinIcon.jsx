/* eslint-disable react/prop-types */
export default function LinkedinIcon({ IconButton, motion, FaLinkedin }) {
  return (
    <IconButton
      as={motion.a}
      initial={{
        translateY: -50,
        opacity: 0,
      }}
      animate={{ translateY: 0, opacity: 1 }}
      transitionDuration={'linear'}
      href={'https://www.linkedin.com/in/muhammad-dariaz-zidane/'}
      target={'_blank'}
      variant={'outline'}
      colorScheme={'linkedin'}
      aria-label={'Linkedin'}
      isRound
      color={'blue'}
      border={0}
      boxShadow={'0px 2px 4px #6366f1'}
      _dark={{
        color: 'white',
        boxShadow: '0px 2px 4px #6366f1',
        _hover: { color: 'blue', bg: 'white', transition: '.5s' },
      }}
      icon={<FaLinkedin size={23} />}
      title={'Linkedin'}
    />
  );
}
