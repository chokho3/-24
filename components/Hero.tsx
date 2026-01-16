
import React from 'react';
import { SiteConfig } from '../types';
import { ChevronDown, Zap } from 'lucide-react';

interface HeroProps {
  config: SiteConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Dimming */}
      <div className="absolute inset-0 z-0">
        <img 
          src={config.sections.hero.bgImage} 
          className="w-full h-full object-cover scale-105 opacity-60" // 이미지를 희미하게 설정 (opacity-60)
          alt="Screen Golf Session"
        />
        {/* 더 깊이감 있는 어두운 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        {/* 중앙 부분만 더 밝게 강조하는 래디얼 그라데이션 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full border border-white/20 bg-white/10 text-white text-sm font-bold backdrop-blur-md animate-fade-in shadow-2xl">
          <Zap size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="tracking-widest uppercase">The Next Level: Golfzon NX</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight animate-slide-up">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
            {config.sections.hero.title}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          {config.sections.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#pricing"
            className="group relative px-10 py-5 text-white font-bold rounded-2xl text-lg transition-all hover:scale-105 shadow-[0_20px_50px_rgba(6,78,59,0.3)] overflow-hidden"
            style={{ backgroundColor: config.primaryColor }}
          >
            <span className="relative z-10">이용 요금 확인</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </a>
          <a 
            href="#location"
            className="px-10 py-5 bg-white/10 text-white backdrop-blur-md border border-white/30 font-bold rounded-2xl text-lg transition-all hover:bg-white/20 hover:scale-105 shadow-xl"
          >
            오시는 길
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce cursor-pointer hover:text-white transition-colors">
        <ChevronDown size={40} />
      </div>
    </section>
  );
};

export default Hero;
