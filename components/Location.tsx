
import React from 'react';
import { MapPin, Clock, Phone, Navigation, Map as MapIcon } from 'lucide-react';
import { SiteConfig } from '../types';

interface LocationProps {
  config: SiteConfig;
}

const Location: React.FC<LocationProps> = ({ config }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold mb-4 uppercase tracking-widest text-sm">
              <MapIcon size={18} />
              Directions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 font-serif leading-tight">
              둔촌역 인근<br/><span className="text-emerald-900">최적의 위치</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all group">
                <div className="p-3 bg-white rounded-xl text-emerald-900 shadow-sm group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900">상세 주소</h4>
                  <p className="text-gray-600 leading-relaxed">{config.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all group">
                <div className="p-3 bg-white rounded-xl text-emerald-900 shadow-sm group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900">운영 정보</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">연중무휴 24시간 정상 영업</p>
                  <p className="text-xs text-gray-400 mt-1">추석, 설 연휴 등 모든 공휴일 동일</p>
                </div>
              </div>

              <div className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all group">
                <div className="p-3 bg-white rounded-xl text-emerald-900 shadow-sm group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900">예약 및 단체 문의</h4>
                  <p className="text-gray-600 leading-relaxed text-xl font-bold tracking-wider">{config.contact.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button 
                className="flex-1 py-4 px-6 bg-[#FAE100] text-[#3C1E1E] font-extrabold rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                onClick={() => window.open(config.contact.kakaoLink, '_blank')}
              >
                카카오맵 길찾기
              </button>
              <button 
                className="flex-1 py-4 px-6 bg-[#03C75A] text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                onClick={() => window.open('https://map.naver.com/', '_blank')}
              >
                <Navigation size={18} />
                네이버 지도
              </button>
            </div>
          </div>

          <div className="group relative">
            {/* Replace with the newly provided 3D isometric map image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-gray-50 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=1600" 
                alt="Detailed 3D Map Illustration of Dunchon area" 
                className="w-full h-auto object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Highlight Overlay to indicate the location based on the provided map image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-red-600 text-white px-4 py-2 rounded-xl shadow-2xl border border-white/40 animate-pulse transform -translate-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold">You are here</p>
                  <p className="text-sm font-black italic">DUNCHON THE KING 24</p>
                </div>
              </div>
            </div>
            
            {/* Floating Info card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-xs animate-bounce-slow">
              <p className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                둔촌역 3번 출구 도보 5분
              </p>
              <p className="text-xs text-gray-500">길동사거리 방향 양재대로 1422, 2층입니다. 대로변에 위치하여 찾기 매우 쉽습니다.</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Location;
