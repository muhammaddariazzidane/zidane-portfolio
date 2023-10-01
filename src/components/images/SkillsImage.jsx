/* eslint-disable react/prop-types */
import { Image } from '@chakra-ui/react';

export default function SkillsImage({ image, size, rounded }) {
  return (
    <Image
      src={image}
      alt={image}
      boxSize={size}
      rounded={rounded ? rounded : ''}
      objectFit={'contain'}
    />
  );
}
