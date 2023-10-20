/* eslint-disable react/prop-types */
import { IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
export default function DarkModeBtn({ colorMode, toggleColorMode }) {
  return (
    <IconButton
      borderRadius={'2rem'}
      icon={
        colorMode === 'dark' ? <SunIcon color={'yellow.300'} /> : <MoonIcon />
      }
      as={motion.button}
      initial={{ rotate: 0 }}
      whileTap={{ rotate: 180 }}
      onClick={toggleColorMode}
      aria-label={'Toggle Dark Mode'}
      variant={'ghost'}
      size={'lg'}
    />
  );
}
