/* eslint-disable react/prop-types */
import { Image, Tooltip } from '@chakra-ui/react';

export default function SkillsImage({ image, size, rounded, title }) {
  return (
    <Tooltip
      hasArrow
      label={title}
      placement={'top'}
      rounded={'md'}
      aria-label={title}
    >
      <Image
        src={image}
        alt={image}
        boxSize={size}
        rounded={rounded ? rounded : null}
        objectFit={'contain'}
        loading={'lazy'}
      />
    </Tooltip>
  );
}
