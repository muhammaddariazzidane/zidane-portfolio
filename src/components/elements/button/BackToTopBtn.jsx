import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

export default function BackToTopBtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 550) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <Box
      pos={'fixed'}
      style={{ scale: show ? '1' : '0', transition: '.2s' }}
      zIndex={99}
      bottom={4}
      right={4}
    >
      <button
        type="button"
        onClick={() => scrollTo({ top: 0 })}
        aria-label={'Back To Top'}
      >
        <FaRegArrowAltCircleUp size={32} />
      </button>
    </Box>
  );
}
