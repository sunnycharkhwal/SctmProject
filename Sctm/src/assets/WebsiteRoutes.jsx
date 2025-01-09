import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router';
import {Home} from './pages/Home';
import {EventManagement} from './pages/EventManagement';
import {Features} from './pages/academyManagement/Features';
import {Overview} from './pages/academyManagement/Overview';
import {Pricing} from './pages/academyManagement/Pricing';
import {ErrorPage} from './pages/ErrorPage';
import {DrawerAppBar} from './navBar/NavBar';
import {About} from './pages/About';
import {Blog} from './pages/Blog';
import {Support} from './pages/Support';
import {TermsAndPolicies} from './pages/TermsAndPolicies';
import {PrivacyPolicy} from './pages/PrivacyPolicy';

export const WebsiteRoutes = () => {
  return (
    <>
      <div style={{marginTop: '5rem'}}>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academy/features" element={<Features />} />
          <Route path="/academy/overview" element={<Overview />} />
          <Route path="/academy/pricing" element={<Pricing />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms-and-policies" element={<TermsAndPolicies />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};
