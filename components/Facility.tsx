
import React from 'react';
import { SiteConfig } from '../types';

interface FacilityProps {
  config: SiteConfig;
}

const Facility: React.FC<FacilityProps> = ({ config }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">Facilities</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 font-serif text-gray-900">최상의 플레이를 위한 공간</h2>
          </div>
          <p className="text-gray-500 max-w-md text-lg">
            고객님의 완벽한 라운딩을 위해 작은 디테일 하나까지 정성껏 준비했습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {config.sections.facility.items.map((item, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
