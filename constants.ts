
import { SiteConfig, Notice } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  brandName: "더킹스크린골프 24시",
  primaryColor: "#064e3b", // 에메랄드 그린
  accentColor: "#d4af37", // 골드 포인트
  contact: {
    phone: "02-474-3232",
    address: "서울특별시 강동구 양재대로 1422, 2층",
    kakaoLink: "https://pf.kakao.com/",
    instaLink: "https://instagram.com/",
  },
  sections: {
    hero: {
      title: "더킹스크린골프 24시",
      subtitle: "최첨단 NX와 함께하는 프리미엄 24시간 골프 라이프",
      // 젊은 남녀가 함께 즐기는 생동감 넘치는 고화질 이미지
      bgImage: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2000",
    },
    about: {
      title: "Premium Golf Lounge",
      content: "둔촌동 최고의 시설을 자랑하는 더킹스크린24시는 최첨단 골프존 NX와 쾌적한 환경을 제공합니다.\n\n로비부터 룸까지 이어지는 모던하고 고급스러운 인테리어에서 차별화된 라운딩을 경험하세요. 365일 24시간, 당신의 열정에 보답하겠습니다.",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1200",
    },
    pricing: {
      items: [
        { time: "주중 12시 이전", price: "17,000", nineHolePrice: "12,000", description: "얼리버드 타임" },
        { time: "주중 12시 ~ 15시", price: "22,000", nineHolePrice: "16,000", description: "런치 타임" },
        { time: "주중 15시 이후", price: "27,000", nineHolePrice: "20,000", description: "프라임 타임" },
        { time: "주말/공휴일 12시 이전", price: "22,000", nineHolePrice: "16,000", description: "주말 오전" },
        { time: "주말/공휴일 12시 이후", price: "27,000", nineHolePrice: "20,000", description: "주말 오후" },
      ]
    },
    facility: {
      items: [
        { name: "최첨단 NX", description: "골프존의 가장 진화된 시스템 NX로 압도적인 그래픽과 물리력을 경험하세요.", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800" },
        { name: "24시간 영업", description: "365일 연중무휴 24시간 운영으로 시간에 구애받지 않고 언제든 플레이 가능합니다.", image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800" },
        { name: "고급 휴게 라운지", description: "라운딩 전후 편안한 휴식을 위한 호텔급 인테리어의 휴게 공간입니다.", image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800" },
      ]
    }
  }
};

export const INITIAL_NOTICES: Notice[] = [
  { id: '1', title: "2026년 붉은 말의 해 맞이 이벤트", date: "2025-12-28", content: "새해 복 많이 받으세요! 더킹 스크린골프 전직원 일동 드림." },
  { id: '2', title: "최첨단 NX 시스템 전 룸 업그레이드 완료", date: "2025-11-15", content: "전 룸 골프존 NX 시스템 도입으로 더 선명하고 정교해졌습니다." },
];
