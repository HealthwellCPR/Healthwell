
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrainingPrograms from '@/components/TrainingPrograms';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>EMSA Approved CPR & First Aid Training | HealthWell CPR & Blended Safety</title>
        <meta name="description" content="Northern California's trusted provider for AHA-aligned CPR, BLS, and First Aid training. Empowering our community with lifesaving skills." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.healthwellcpr.com/" />
        <meta property="og:title" content="EMSA Approved CPR & First Aid Training | HealthWell CPR" />
        <meta property="og:description" content="Northern California's trusted provider for AHA-aligned CPR, BLS, and First Aid training. Empowering our community with lifesaving skills." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/552fd5cd-bd7f-4c0d-9f43-cdd897e23481/b774295d70264af441919aafbcd076af.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.healthwellcpr.com/" />
        <meta property="twitter:title" content="EMSA Approved CPR & First Aid Training | HealthWell CPR" />
        <meta property="twitter:description" content="Northern California's trusted provider for AHA-aligned CPR, BLS, and First Aid training. Empowering our community with lifesaving skills." />
        <meta property="twitter:image" content="https://horizons-cdn.hostinger.com/552fd5cd-bd7f-4c0d-9f43-cdd897e23481/b774295d70264af441919aafbcd076af.png" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <TrainingPrograms />
        <BlogSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
