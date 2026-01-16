
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Settings, Layout, FileText, MapPin, Palette, Home, Save, LogOut } from 'lucide-react';
import { SiteConfig, Notice } from '../../types';

interface AdminDashboardProps {
  config: SiteConfig;
  onUpdateConfig: (config: SiteConfig) => void;
  notices: Notice[];
  onUpdateNotices: (notices: Notice[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  config, 
  onUpdateConfig, 
  notices, 
  onUpdateNotices 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [localConfig, setLocalConfig] = useState<SiteConfig>(config);
  const [localNotices, setLocalNotices] = useState<Notice[]>(notices);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    onUpdateConfig(localConfig);
    onUpdateNotices(localNotices);
    setMessage('저장되었습니다!');
    setTimeout(() => setMessage(''), 3000);
  };

  const navItems = [
    { icon: <Settings size={20} />, label: '기본 설정', path: '/admin' },
    { icon: <Layout size={20} />, label: '섹션 관리', path: '/admin/sections' },
    { icon: <FileText size={20} />, label: '공지사항', path: '/admin/notices' },
    { icon: <Palette size={20} />, label: '디자인/테마', path: '/admin/theme' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
        <div className="p-8">
          <span className="text-xl font-black italic tracking-tighter block text-emerald-400">
            ADMIN PANEL
          </span>
          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Dunchon The King</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-400 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Home size={18} />
            홈페이지 보기
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
            <LogOut size={18} />
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">관리자 대시보드</h1>
            <p className="text-gray-500 mt-2">웹사이트의 모든 정보를 코딩 없이 수정할 수 있습니다.</p>
          </div>
          <div className="flex items-center gap-4">
            {message && <span className="text-emerald-600 font-bold animate-pulse">{message}</span>}
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-emerald-600/20 transition-all"
            >
              <Save size={20} />
              변경사항 저장
            </button>
          </div>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 min-h-[600px]">
          <Routes>
            <Route path="/" element={
              <div className="space-y-8 max-w-2xl">
                <h2 className="text-xl font-bold border-b pb-4">기본 정보 설정</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">상호명</label>
                    <input 
                      type="text" 
                      value={localConfig.brandName}
                      onChange={e => setLocalConfig({...localConfig, brandName: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
                      <input 
                        type="text" 
                        value={localConfig.contact.phone}
                        onChange={e => setLocalConfig({...localConfig, contact: {...localConfig.contact, phone: e.target.value}})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">주소</label>
                      <input 
                        type="text" 
                        value={localConfig.contact.address}
                        onChange={e => setLocalConfig({...localConfig, contact: {...localConfig.contact, address: e.target.value}})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            } />

            <Route path="/sections" element={
              <div className="space-y-12">
                <h2 className="text-xl font-bold border-b pb-4">메인 섹션 관리</h2>
                
                {/* Hero Section Edit */}
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    히어로 섹션 (메인 상단)
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">메인 제목</label>
                      <input 
                        type="text" 
                        value={localConfig.sections.hero.title}
                        onChange={e => setLocalConfig({
                          ...localConfig, 
                          sections: {
                            ...localConfig.sections, 
                            hero: {...localConfig.sections.hero, title: e.target.value}
                          }
                        })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">배경 이미지 URL</label>
                      <input 
                        type="text" 
                        value={localConfig.sections.hero.bgImage}
                        onChange={e => setLocalConfig({
                          ...localConfig, 
                          sections: {
                            ...localConfig.sections, 
                            hero: {...localConfig.sections.hero, bgImage: e.target.value}
                          }
                        })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* About Section Edit */}
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    소개 섹션
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">소개 내용</label>
                      <textarea 
                        rows={4}
                        value={localConfig.sections.about.content}
                        onChange={e => setLocalConfig({
                          ...localConfig, 
                          sections: {
                            ...localConfig.sections, 
                            about: {...localConfig.sections.about, content: e.target.value}
                          }
                        })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            } />

            <Route path="/notices" element={
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">공지사항 관리</h2>
                  <button 
                    onClick={() => setLocalNotices([{id: Date.now().toString(), title: '새 공지사항', date: new Date().toISOString().split('T')[0], content: ''}, ...localNotices])}
                    className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg font-bold"
                  >
                    + 공지 추가
                  </button>
                </div>
                <div className="space-y-4">
                  {localNotices.map((notice, idx) => (
                    <div key={notice.id} className="p-4 border border-gray-100 rounded-xl flex items-center justify-between hover:bg-gray-50">
                      <div>
                        <input 
                          type="text" 
                          value={notice.title} 
                          onChange={(e) => {
                            const updated = [...localNotices];
                            updated[idx].title = e.target.value;
                            setLocalNotices(updated);
                          }}
                          className="font-bold bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded px-1"
                        />
                        <p className="text-xs text-gray-400 mt-1">{notice.date}</p>
                      </div>
                      <button 
                        onClick={() => setLocalNotices(localNotices.filter(n => n.id !== notice.id))}
                        className="text-red-500 text-sm hover:underline"
                      >
                        삭제
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            } />

            <Route path="/theme" element={
              <div className="space-y-8">
                <h2 className="text-xl font-bold border-b pb-4">테마 및 디자인</h2>
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">메인 컬러 (Primary)</label>
                      <div className="flex items-center gap-4">
                        <input 
                          type="color" 
                          value={localConfig.primaryColor}
                          onChange={e => setLocalConfig({...localConfig, primaryColor: e.target.value})}
                          className="w-16 h-16 rounded-lg cursor-pointer border-none p-0"
                        />
                        <input 
                          type="text" 
                          value={localConfig.primaryColor}
                          onChange={e => setLocalConfig({...localConfig, primaryColor: e.target.value})}
                          className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">포인트 컬러 (Accent)</label>
                      <div className="flex items-center gap-4">
                        <input 
                          type="color" 
                          value={localConfig.accentColor}
                          onChange={e => setLocalConfig({...localConfig, accentColor: e.target.value})}
                          className="w-16 h-16 rounded-lg cursor-pointer border-none p-0"
                        />
                        <input 
                          type="text" 
                          value={localConfig.accentColor}
                          onChange={e => setLocalConfig({...localConfig, accentColor: e.target.value})}
                          className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                    <h4 className="font-bold text-sm mb-4">현재 테마 미리보기</h4>
                    <div className="space-y-4">
                      <div className="h-4 w-3/4 rounded" style={{ backgroundColor: localConfig.primaryColor }}></div>
                      <div className="h-4 w-1/2 rounded opacity-50" style={{ backgroundColor: localConfig.primaryColor }}></div>
                      <div className="h-8 w-32 rounded" style={{ backgroundColor: localConfig.accentColor }}></div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
                      색상 변경 시 홈페이지 전체의 버튼, 아이콘, 텍스트 하이라이트 색상이 실시간으로 변경됩니다.
                    </p>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
