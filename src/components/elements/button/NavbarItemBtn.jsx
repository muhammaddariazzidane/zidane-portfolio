/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react';

export default function NavbarItemBtn({ motion, Link }) {
  return (
    <>
      <Button
        variant={'ghost'}
        as={motion.button}
        whileTap={{ scale: 0.9 }}
        onTapStart={() => {}}
        onTapEnd={() => {}}
      >
        <Link to={location.pathname == '/' ? '#' : '/'}>Home</Link>
      </Button>
      <Button
        as={motion.a}
        whileTap={{ scale: 0.9 }}
        onTapStart={() => {}}
        onTapEnd={() => {}}
        href={'#about'}
        variant={'ghost'}
        aria-label={'About'}
      >
        About
      </Button>
      <Button
        variant="ghost"
        as={motion.a}
        whileTap={{ scale: 0.9 }}
        onTapStart={() => {}}
        onTapEnd={() => {}}
        href={'#projects'}
        aria-label={'Projects'}
      >
        Projects
      </Button>
      <Button
        as={motion.a}
        whileTap={{ scale: 0.9 }}
        onTapStart={() => {}}
        onTapEnd={() => {}}
        href={'#skills'}
        variant={'ghost'}
        aria-label={'Skills'}
      >
        Skills
      </Button>
      <Button
        as={motion.a}
        whileTap={{ scale: 0.9 }}
        onTapStart={() => {}}
        onTapEnd={() => {}}
        variant={'ghost'}
        href={'#contact'}
        aria-label={'Contact'}
      >
        Contact
      </Button>
    </>
  );
}
