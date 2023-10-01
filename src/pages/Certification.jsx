import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Certificate from '../components/Certificate';
import Layout from '../layouts/Layout';

export default function Certification() {
  return (
    <Layout>
      <Container maxW={{ lg: 'container.lg', base: 'container.md' }} py={12}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to={'/'}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage>Certification</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
      <Certificate />
    </Layout>
  );
}
