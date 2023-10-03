/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react';

export default function NavbarItemBtn(props) {
  const { motion, Link } = props;

  const buttons = [
    {
      label: 'Home',
      to: location.pathname === '/' ? '#' : '/',
      as: motion.button,
    },
    {
      label: 'About',
      href: '#about',
      as: motion.a,
    },
    {
      label: 'Projects',
      href: '#projects',
      as: motion.a,
    },
    {
      label: 'Skills',
      href: '#skills',
      as: motion.a,
    },
    {
      label: 'Contact',
      href: '#contact',
      as: motion.a,
    },
  ];

  return (
    <>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={'ghost'}
          as={button.as}
          whileTap={{ scale: 0.9 }}
          onTapStart={() => {}}
          onTapEnd={() => {}}
          href={button.href}
        >
          {button.label === 'Home' ? (
            <Link to={button.to}>{button.label}</Link>
          ) : (
            button.label
          )}
        </Button>
      ))}
    </>
  );
}
