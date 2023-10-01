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
      size={'3xl'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      closeOnEsc={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Image
            src={props.selectedCertificate.image}
            sizes={'md'}
            alt={props.selectedCertificate.image}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
