
import React from 'react';
import { SiteConfig } from '../types';

interface PricingProps {
  config: SiteConfig;
}

const Pricing: React.FC<PricingProps> = ({ config }) => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">이용 요금 안내</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            더킹스크린24시는 골프존 최신 NX 장비와 함께 시간대에 따른 합리적인 요금을 제안합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.sections.pricing.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-5xl font-black italic text-emerald-500">NX</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{item.time}</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black" style={{ color: config.accentColor }}>{item.price}</span>
                  <span className="text-sm text-gray-400">18홀</span>
                </div>
                {item.nineHolePrice && (
                  <div className="flex items-baseline gap-2 text-gray-400">
                    <span className="text-xl font-bold">9홀 {item.nineHolePrice}</span>
                  </div>
                )}
              </div>
              <p className="text-gray-500 mb-6 text-sm italic">{item.description}</p>
              <div className="h-px bg-white/10 mb-6"></div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">• 최신 NX 시스템 이용</li>
                <li className="flex items-center gap-2">• 커피 및 다과 서비스 제공</li>
                <li className="flex items-center gap-2">• 24시간 연중무휴 이용 가능</li>
                <li className="flex items-center gap-2">• 주차 시설 이용 가능</li>
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/5 border border-dashed border-white/20 rounded-2xl p-6 text-center">
          <p className="text-2xl font-bold text-white mb-2">포섬요금 1만원 추가</p>
          <p className="text-sm text-gray-500">* 주말 및 공휴일은 12시를 기준으로 요금이 변동됩니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
