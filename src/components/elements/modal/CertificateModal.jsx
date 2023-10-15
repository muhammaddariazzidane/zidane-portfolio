/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
} from '@chakra-ui/react';

export default function CertificateModal(props) {
  const { isOpen, onClose, selectedCertificate } = props;

  if (!selectedCertificate) {
    return null;
  }

  return (
    <Modal
      size={{ lg: 'xl', base: 'sm' }}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset={'none'}
      isCentered
      closeOnEsc={true}
    >
      <ModalOverlay bg={'blackAlpha.100'} />
      <ModalContent shadow={'none'} rounded={'lg'}>
        <ModalBody p={0}>
          <Image
            src={selectedCertificate.image}
            boxSize={'full'}
            rounded={'md'}
            alt={selectedCertificate.image}
            loading={'lazy'}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
