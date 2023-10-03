/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Container, Flex, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import certificates from '../services/certificate';
import CertificateCard from '../components/elements/card/CertificateCard';
import HeadingTitle from '../components/elements/Heading/HeadingTitle';

export default function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    onOpen();
  };
  const isHomePage = useLocation().pathname === '/';

  return (
    <Box
      py={{ lg: 12, base: 24 }}
      mt={5}
      px={2}
      pos={'relative'}
      id={'certificate'}
    >
      {isHomePage && (
        <HeadingTitle motion={motion} title={'Certification'} size={40} />
      )}

      <Container maxW={'container.lg'} w={'full'}>
        <Flex
          as={motion.div}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          mt={isHomePage ? 28 : { lg: -16, base: -32 }}
          justify={'center'}
          gap={3}
          flexWrap={'wrap'}
        >
          {certificates
            .map((item, index) => (
              <CertificateCard
                item={item}
                key={index}
                isOpen={isOpen}
                onClose={onClose}
                selectedCertificate={selectedCertificate}
                handleCertificateClick={handleCertificateClick}
              />
            ))
            .slice(0, isHomePage ? 5 : undefined)}
        </Flex>
      </Container>
      {isHomePage && (
        <Container maxW={'container.lg'} mt={5}>
          <Flex justify={'center'}>
            <Button variant={'ghost'} colorScheme={'blue'}>
              <Link to={'/certification'}>See More...</Link>
            </Button>
          </Flex>
        </Container>
      )}
    </Box>
  );
}
