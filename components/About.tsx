
import React from 'react';
import { SiteConfig } from '../types';

interface AboutProps {
  config: SiteConfig;
}

const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gray-100 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform"></div>
            <img 
              src={config.sections.about.image} 
              alt="Brand Image" 
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: config.accentColor }}>
              About The King
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-gray-900 font-serif leading-tight">
              {config.sections.about.title}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {config.sections.about.content}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold" style={{ color: config.primaryColor }}>24H</p>
                <p className="text-sm text-gray-500 mt-1">언제나 열려있는 공간</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: config.primaryColor }}>Premium</p>
                <p className="text-sm text-gray-500 mt-1">최고급 시설과 서비스</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
