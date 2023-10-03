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
      motionPreset="slideInTop"
      isCentered
      closeOnEsc={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
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
