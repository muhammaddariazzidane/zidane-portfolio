import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkModeBtn from './elements/button/DarkModeBtn';
import NavbarItemBtn from './elements/button/NavbarItemBtn';
import MenuItemBtn from './elements/button/MenuItemBtn';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      shadow={'md'}
      as={motion.div}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      w={'100%'}
    >
      <Container maxW="container.lg" py={4}>
        <Flex justify={'space-between'} alignItems={'center'}>
          <Box p={'2'}>
            <Heading size={'md'}>Muhammad Dariaz Zidane</Heading>
          </Box>

          <Menu isLazy closeOnSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="Hamburger Button  "
              icon={<HamburgerIcon />}
              variant="outline"
              hideFrom={'md'}
            />
            <MenuList zIndex={99} hideFrom={'md'}>
              <MenuItemBtn Link={Link} />
              <DarkModeBtn
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              />
            </MenuList>
          </Menu>
          <Flex
            hideBelow={'md'}
            justify={'space-between'}
            alignItems={'center'}
            gap={'2'}
          >
            <NavbarItemBtn motion={motion} Link={Link} />
          </Flex>
          <Flex hideBelow={'md'} alignItems="center" gap={1}>
            <DarkModeBtn
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
