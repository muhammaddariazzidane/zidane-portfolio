/* eslint-disable react/prop-types */

export default function GithubIcon({ IconButton, motion, FaGithub }) {
  return (
    <IconButton
      as={motion.a}
      initial={{
        translateX: -50,
        opacity: 0,
      }}
      animate={{ translateX: 0, opacity: 1 }}
      transitionDuration={'linear'}
      href={'https://github.com/muhammaddariazzidane'}
      variant={'outline'}
      colorScheme={'telegram'}
      aria-label={'github'}
      isRound
      color={'black'}
      border={0}
      boxShadow={'0px 2px 4px #6366f1'}
      _dark={{
        color: 'white',
        boxShadow: '0px 2px 4px #6366f1',
        _hover: { color: 'black', bg: 'white', transition: '.5s' },
      }}
      icon={<FaGithub size={23} />}
      title={'Github'}
    />
  );
}
