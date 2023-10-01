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

export default function InternshipCard({ i, internship, BsBuildingsFill }) {
  return (
    <Step key={i}>
      <StepIndicator>
        <StepStatus
          complete={<BsBuildingsFill />}
          incomplete={<BsBuildingsFill />}
          active={<BsBuildingsFill />}
        />
      </StepIndicator>

      <Box flexShrink="0">
        {internship.experience?.map((job, i) => (
          <div key={i}>
            <StepTitle as={'h1'}>{job.company}</StepTitle>
            <StepDescription>{job.job}</StepDescription>
          </div>
        ))}
      </Box>

      <StepSeparator />
    </Step>
  );
}
