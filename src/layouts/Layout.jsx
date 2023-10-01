/* eslint-disable react/prop-types */
import { Progress } from '@chakra-ui/react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Suspense, lazy } from 'react';
import NavbarSkeleton from '../components/skeleton/NavbarSkeleton';
import FooterSkeleton from '../components/skeleton/FooterSkeleton';
import BackToTopBtn from '../components/elements/button/BackToTopBtn';
const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Progress
          aria-label={'loading....'}
          pos={'fixed'}
          top={0}
          left={0}
          right={0}
          zIndex={10}
          as={motion.div}
          size={'xs'}
          bg={'#4f46e5'}
          style={{ scaleX }}
        />
        <Navbar />
      </Suspense>
      <BackToTopBtn />
      <main>{children}</main>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
}
