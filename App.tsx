
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { INITIAL_CONFIG, INITIAL_NOTICES } from './constants';
import { SiteConfig, Notice } from './types';

// UI Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Facility from './components/Facility';
import Location from './components/Location';
import Inquiry from './components/Inquiry'; // 신규 추가
import Footer from './components/Footer';
import AdminDashboard from './components/Admin/AdminDashboard';

const PublicSite: React.FC<{ config: SiteConfig, notices: Notice[] }> = ({ config, notices }) => {
  return (
    <div className="min-h-screen">
      <Navbar config={config} />
      <main>
        <div id="home"><Hero config={config} /></div>
        <div id="about"><About config={config} /></div>
        <div id="facility"><Facility config={config} /></div>
        <div id="pricing"><Pricing config={config} /></div>
        <div id="location"><Location config={config} /></div>
        <div id="inquiry"><Inquiry config={config} /></div> {/* 데이터 수집을 위한 신규 섹션 */}
      </main>
      <Footer config={config} notices={notices} />
      
      {/* Admin Quick Link */}
      <Link 
        to="/admin" 
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg opacity-50 hover:opacity-100 transition-opacity z-50 text-xs"
      >
        Admin
      </Link>
    </div>
  );
};

const App: React.FC = () => {
  const [config, setConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);

  useEffect(() => {
    const savedConfig = localStorage.getItem('site_config');
    const savedNotices = localStorage.getItem('site_notices');
    if (savedConfig) setConfig(JSON.parse(savedConfig));
    if (savedNotices) setNotices(JSON.parse(savedNotices));
  }, []);

  const handleUpdateConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    localStorage.setItem('site_config', JSON.stringify(newConfig));
  };

  const handleUpdateNotices = (newNotices: Notice[]) => {
    setNotices(newNotices);
    localStorage.setItem('site_notices', JSON.stringify(newNotices));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicSite config={config} notices={notices} />} />
        <Route 
          path="/admin/*" 
          element={
            <AdminDashboard 
              config={config} 
              onUpdateConfig={handleUpdateConfig}
              notices={notices}
              onUpdateNotices={handleUpdateNotices}
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
