/* eslint-disable react/prop-types */

export default function DownloadCVBtn({ Button, motion, DownloadIcon }) {
  return (
    <Button
      rightIcon={<DownloadIcon boxSize={4} />}
      rounded={'full'}
      variant={'outline'}
      color={'#3730a3'}
      borderColor={'#6366f1'}
      _dark={{ color: 'white' }}
      as={motion.a}
      initial={{
        translateX: 50,
        opacity: 0,
      }}
      animate={{ translateX: 0, opacity: 1 }}
      transition=".2s linear"
      download={true}
      href={'document/muhammad-dariaz-zidane.pdf'}
      whileTap={{ scale: 0.9 }}
      aria-label={'Download CV'}
    >
      Download CV
    </Button>
  );
}
