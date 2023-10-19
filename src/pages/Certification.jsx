import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react';
import { Suspense, lazy, useEffect } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import CertificateSkeleton from '../components/skeleton/CertificateSkeleton';
import Layout from '../layouts/Layout';
const Certificate = lazy(() => import('../components/Certificate'));

export default function Certification() {
  useEffect(() => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }, []);
  return (
    <Layout>
      <Container maxW={{ lg: 'container.lg', base: 'container.md' }} py={12}>
        <Breadcrumb
          mt={'-5'}
          ml={{ lg: '2', base: '3' }}
          spacing={'8px'}
          separator={<ChevronRightIcon color={'gray.500'} />}
        >
          <BreadcrumbItem>
            <Link to={'/'}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage>Certification</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
      <Suspense fallback={<CertificateSkeleton />}>
        <Certificate />
      </Suspense>
    </Layout>
  );
}
