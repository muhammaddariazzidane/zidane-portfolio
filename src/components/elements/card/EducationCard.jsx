/* eslint-disable react/prop-types */
import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
} from '@chakra-ui/react';

export default function EducationCard({ MdSchool, education }) {
  return (
    <Step>
      <StepIndicator>
        <StepStatus
          complete={<MdSchool />}
          incomplete={<MdSchool />}
          active={<MdSchool />}
        />
      </StepIndicator>

      <Box flexShrink="0">
        <StepTitle as={'h1'}>{education.title}</StepTitle>
        <StepDescription>{education.description}</StepDescription>
      </Box>

      <StepSeparator />
    </Step>
  );
}
