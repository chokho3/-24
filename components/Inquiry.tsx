
import React from 'react';
import { SiteConfig } from '../types';
import { Send, Calendar, Users, Clock } from 'lucide-react';

interface InquiryProps {
  config: SiteConfig;
}

const Inquiry: React.FC<InquiryProps> = ({ config }) => {
  const FORMSPREE_URL = "https://formspree.io/f/xzddddkb";

  return (
    <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Quick Reservation</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-serif">간편 예약 및 상담 신청</h2>
          <p className="text-emerald-100/70 max-w-xl mx-auto">
            상담 내용을 남겨주시면 확인 즉시 연락드리겠습니다.<br/>
            (24시간 운영 중이므로 언제든 문의 가능합니다.)
          </p>
        </div>

        <form 
          action={FORMSPREE_URL} 
          method="POST"
          className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-emerald-300 mb-2">성함</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="홍길동"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-emerald-300 mb-2">연락처</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="010-0000-0000"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* People */}
            <div className="relative">
              <label className="block text-sm font-medium text-emerald-300 mb-2">인원수</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
                <input 
                  type="number" 
                  name="people_count" 
                  min="1"
                  placeholder="2"
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>
            {/* Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-emerald-300 mb-2">예약 희망 날짜</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
                <input 
                  type="date" 
                  name="reservation_date" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all [color-scheme:dark]"
                />
              </div>
            </div>
            {/* Time */}
            <div className="relative">
              <label className="block text-sm font-medium text-emerald-300 mb-2">희망 시간</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
                <input 
                  type="time" 
                  name="reservation_time" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-sm font-medium text-emerald-300 mb-2">문의 내용 (선택)</label>
            <textarea 
              name="message" 
              rows={4} 
              placeholder="궁금하신 사항이나 요청 사항을 입력해주세요."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
          >
            <Send size={20} />
            정보 제출하고 예약 문의하기
          </button>
          <p className="text-center text-xs text-emerald-100/30 mt-6">
            본 양식을 통해 전송된 정보는 예약 확인 및 상담 목적으로만 사용됩니다.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Inquiry;
