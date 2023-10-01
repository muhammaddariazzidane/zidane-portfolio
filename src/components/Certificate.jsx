/* eslint-disable react/no-unescaped-entities */
import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { lazy, useState } from 'react';
import certificates from '../services/certificate';
const CertificateCard = lazy(() => import('./elements/card/CertificateCard'));

export default function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    onOpen();
  };
  return (
    <Box py={12} pos={'relative'} px={2} id={'certificate'}>
      {location.pathname == '/' ? (
        <>
          <Heading
            pos={'absolute'}
            left={0}
            right={0}
            zIndex={'9'}
            textAlign="center"
            size="lg"
            as={motion.h3}
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Certification
          </Heading>
          <AbsoluteCenter
            rounded={5}
            bgGradient={'linear(to-b, #e0e7ff, white, white)'}
            _dark={{ bgGradient: 'linear(to-b, #1e1b4b, gray.800, gray.800)' }}
            zIndex={1}
            top={16}
            pt="5"
            pb={16}
            axis="both"
            maxW={'48'}
            w={'50%'}
          ></AbsoluteCenter>
        </>
      ) : null}
      <Container maxW={'container.lg'} w={'full'}>
        <Flex
          as={motion.div}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          mt={location.pathname == '/' ? '24' : '-12'}
          justify={'center'}
          gap={3}
          flexWrap={'wrap'}
        >
          {certificates && location.pathname == '/'
            ? certificates
                .slice(0, 6)
                .map((item, i) => (
                  <CertificateCard
                    item={item}
                    key={i}
                    isOpen={isOpen}
                    onClose={onClose}
                    selectedCertificate={selectedCertificate}
                    handleCertificateClick={handleCertificateClick}
                  />
                ))
            : certificates.map((item, i) => (
                <CertificateCard
                  item={item}
                  key={i}
                  isOpen={isOpen}
                  onClose={onClose}
                  selectedCertificate={selectedCertificate}
                  handleCertificateClick={handleCertificateClick}
                />
              ))}
        </Flex>
      </Container>
      {location.pathname == '/' && (
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
