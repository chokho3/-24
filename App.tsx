
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
import Inquiry from './components/Inquiry';
import Footer from './components/Footer';
import AdminDashboard from './components/Admin/AdminDashboard';

const PublicSite: React.FC<{ config: SiteConfig, notices: Notice[] }> = ({ config, notices }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar config={config} />
      <main className="flex-grow">
        <section id="home"><Hero config={config} /></section>
        <section id="about"><About config={config} /></section>
        <section id="facility"><Facility config={config} /></section>
        <section id="pricing"><Pricing config={config} /></section>
        <section id="location"><Location config={config} /></section>
        <section id="inquiry"><Inquiry config={config} /></section>
      </main>
      <Footer config={config} notices={notices} />
      
      {/* Admin Quick Link */}
      <Link 
        to="/admin" 
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg opacity-30 hover:opacity-100 transition-opacity z-50 text-xs"
      >
        Admin
      </Link>
    </div>
  );
};

const App: React.FC = () => {
  const [config, setConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);

  // 초기 로딩 시 로컬 스토리지 데이터 복구 (에러 방지 처리)
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem('site_config');
      const savedNotices = localStorage.getItem('site_notices');
      
      if (savedConfig) {
        const parsed = JSON.parse(savedConfig);
        // 간단한 유효성 검사 후 상태 반영
        if (parsed && typeof parsed === 'object' && parsed.brandName) {
          setConfig(parsed);
        }
      }
      
      if (savedNotices) {
        const parsed = JSON.parse(savedNotices);
        if (Array.isArray(parsed)) {
          setNotices(parsed);
        }
      }
    } catch (error) {
      console.warn("로컬 저장소 데이터를 불러오는 중 오류가 발생했습니다. 기본 설정을 사용합니다.");
    }
  }, []);

  const handleUpdateConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('site_config', JSON.stringify(newConfig));
    } catch (e) {
      console.error("설정 저장 실패:", e);
    }
  };

  const handleUpdateNotices = (newNotices: Notice[]) => {
    setNotices(newNotices);
    try {
      localStorage.setItem('site_notices', JSON.stringify(newNotices));
    } catch (e) {
      console.error("공지 저장 실패:", e);
    }
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
