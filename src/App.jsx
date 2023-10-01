// import Certification from './pages/Certification';
import Home from './pages/Home';
import PageNotFound from './pages/errors/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CertificateSkeleton from './components/skeleton/CertificateSkeleton';
const Certification = lazy(() => import('./pages/Certification'));

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/*'} element={<PageNotFound />} />
      <Route
        path={'/certification'}
        element={
          <Suspense fallback={<CertificateSkeleton />}>
            <Certification />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
