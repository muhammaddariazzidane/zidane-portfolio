/* eslint-disable react/prop-types */
import { MenuItem } from '@chakra-ui/react';

export default function MenuItemBtn({ Link }) {
  return (
    <>
      <MenuItem>
        <Link to={location.pathname == '/' ? '#' : '/'}>Home</Link>
      </MenuItem>
      <MenuItem as={'a'} aria-label={'About'} href={'#about'}>
        About
      </MenuItem>
      <MenuItem as={'a'} aria-label={'Projects'} href={'#projects'}>
        Projects
      </MenuItem>
      <MenuItem as={'a'} aria-label={'Contact'} href={'#contact'}>
        Contact
      </MenuItem>
    </>
  );
}
