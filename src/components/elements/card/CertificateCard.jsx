/* eslint-disable react/prop-types */
import { Box, Image } from '@chakra-ui/react';
import CertificateModal from '../modal/CertificateModal';

export default function CertificateCard(props) {
  const { item, handleCertificateClick, isOpen, onClose, selectedCertificate } =
    props;

  return (
    <Box
      cursor={'pointer'}
      w={'full'}
      maxW={'xs'}
      onClick={() => handleCertificateClick(item)}
    >
      <Image
        src={item.image}
        mx={'auto'}
        rounded={'md'}
        objectFit={'contain'}
        alt={item.image}
        boxSize={'full'}
        loading={'lazy'}
      />
      <CertificateModal
        isOpen={isOpen}
        onClose={onClose}
        selectedCertificate={selectedCertificate}
      />
    </Box>
  );
}
