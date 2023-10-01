import { Suspense, lazy } from 'react';
import Layout from '../layouts/Layout';
import HeroSkeleton from '../components/skeleton/HeroSkeleton';
import SkillSkeleton from '../components/skeleton/SkillSkeleton';
import ContactSkeleton from '../components/skeleton/ContactSkeleton';
import ProjectSkeleton from '../components/skeleton/ProjectSkeleton';
import AboutSkeleton from '../components/skeleton/AboutSkeleton';
import CertificateSkeleton from '../components/skeleton/CertificateSkeleton';
const Hero = lazy(() => import('../components/Hero'));
const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));
const Certificate = lazy(() => import('../components/Certificate'));

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SkillSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<ProjectSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<CertificateSkeleton />}>
        <Certificate />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </Layout>
  );
}
