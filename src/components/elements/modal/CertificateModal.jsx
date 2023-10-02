/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
} from '@chakra-ui/react';

export default function CertificateModal(props) {
  if (!props.selectedCertificate) {
    return null;
  }

  return (
    <Modal
      size={{ lg: 'xl', base: 'sm' }}
      isOpen={props.isOpen}
      onClose={props.onClose}
      motionPreset="slideInTop"
      isCentered
      closeOnEsc={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Image
            src={props.selectedCertificate.image}
            boxSize={'full'}
            rounded={'md'}
            alt={props.selectedCertificate.image}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
