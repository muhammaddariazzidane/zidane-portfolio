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

export default function InternshipCard({ internship, BsBuildingsFill }) {
  const { experience } = internship;
  return (
    <Step>
      <StepIndicator>
        <StepStatus
          complete={<BsBuildingsFill />}
          incomplete={<BsBuildingsFill />}
          active={<BsBuildingsFill />}
        />
      </StepIndicator>

      <Box flexShrink="0">
        {experience?.map((job) => (
          <div key={job.id}>
            <StepTitle as={'h1'}>{job.company}</StepTitle>
            <StepDescription>{job.job}</StepDescription>
          </div>
        ))}
      </Box>

      <StepSeparator />
    </Step>
  );
}
