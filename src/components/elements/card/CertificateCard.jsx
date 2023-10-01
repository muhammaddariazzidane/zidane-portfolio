/* eslint-disable react/prop-types */
import { Box, Image } from '@chakra-ui/react';
import CertificateModal from '../modal/CertificateModal';

export default function CertificateCard(props) {
  return (
    <Box
      cursor={'pointer'}
      w={'full'}
      maxW={'xs'}
      onClick={() => props.handleCertificateClick(props.item)}
    >
      <Image
        src={props.item.image}
        mx={'auto'}
        rounded={'md'}
        objectFit={'contain'}
        alt={props.item.image}
        boxSize={'full'}
      />
      <CertificateModal
        isOpen={props.isOpen}
        onClose={props.onClose}
        selectedCertificate={props.selectedCertificate}
      />
    </Box>
  );
}
