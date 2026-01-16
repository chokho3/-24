
import React from 'react';
import { SiteConfig, Notice } from '../types';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  config: SiteConfig;
  notices: Notice[];
}

const Footer: React.FC<FooterProps> = ({ config, notices }) => {
  const FORMSPREE_URL = "https://formspree.io/f/xzddddkb";

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <span className="text-2xl font-black italic tracking-tighter block mb-6" style={{ color: config.primaryColor }}>
              {config.brandName}
            </span>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              최고의 스크린 골프 환경과<br /> 24시간 서비스를 제공합니다.
            </p>
            <div className="flex gap-4">
              <a href={config.contact.instaLink} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={config.contact.kakaoLink} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-900 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">공지사항</h4>
            <div className="space-y-4">
              {notices.slice(0, 3).map(notice => (
                <div key={notice.id} className="group cursor-pointer">
                  <p className="text-xs text-gray-400 mb-1">{notice.date}</p>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-900 transition-colors line-clamp-1">
                    {notice.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">빠른 링크</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-emerald-900">소개</a></li>
              <li><a href="#facility" className="hover:text-emerald-900">시설</a></li>
              <li><a href="#pricing" className="hover:text-emerald-900">가격</a></li>
              <li><a href="#location" className="hover:text-emerald-900">위치</a></li>
              <li><a href="#inquiry" className="hover:text-emerald-900 text-emerald-700 font-bold">예약신청</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">뉴스레터</h4>
            <p className="text-sm text-gray-500 mb-6">신규 이벤트 소식을 받아보세요.</p>
            <form 
              action={FORMSPREE_URL} 
              method="POST" 
              className="flex border border-gray-200 rounded-lg p-1 bg-white focus-within:ring-2 focus-within:ring-emerald-500 transition-all"
            >
              <input 
                type="email" 
                name="newsletter_email"
                placeholder="이메일 입력" 
                required
                className="flex-1 px-3 py-2 text-sm focus:outline-none bg-transparent" 
              />
              <button type="submit" className="bg-gray-900 text-white p-2 rounded-md hover:bg-emerald-900 transition-colors">
                <ArrowRight size={18} />
              </button>
              {/* Formspree hidden subjects to distinguish footer entries */}
              <input type="hidden" name="_subject" value="New Newsletter Subscription!" />
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 text-center md:flex md:justify-between md:text-left">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            &copy; 2024 {config.brandName}. All rights reserved.
          </p>
          <div className="space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600 underline">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-600 underline">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
