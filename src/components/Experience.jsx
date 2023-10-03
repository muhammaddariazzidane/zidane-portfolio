import { Box, Heading, Stepper, useSteps } from '@chakra-ui/react';
import { MdSchool } from 'react-icons/md';
import { BsBuildingsFill } from 'react-icons/bs';
import steps from '../services/experience';
import InternshipCard from './elements/card/InternshipCard';
import EducationCard from './elements/card/EducationCard';

export default function Experience() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <>
      <Box>
        <Heading as={'h1'} mb={6} fontSize={'lg'}>
          My Education <MdSchool style={{ display: 'inline' }} />
        </Heading>
        <Stepper index={activeStep} orientation="vertical" h={'32'} gap="0">
          {steps.map((education, i) => (
            <EducationCard MdSchool={MdSchool} education={education} key={i} />
          ))}
        </Stepper>
      </Box>

      <Box>
        <Heading as={'h1'} mb={6} fontSize={'lg'}>
          Internship Experience {''}
          <BsBuildingsFill style={{ display: 'inline' }} />
        </Heading>
        <Stepper
          colorScheme={'green'}
          index={activeStep}
          orientation="vertical"
          h={'32'}
          gap="0"
        >
          {steps.map((internship, i) => (
            <InternshipCard
              BsBuildingsFill={BsBuildingsFill}
              internship={internship}
              key={i}
            />
          ))}
        </Stepper>
      </Box>
    </>
  );
}
