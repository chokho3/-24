
export interface SiteConfig {
  brandName: string;
  primaryColor: string;
  accentColor: string;
  contact: {
    phone: string;
    address: string;
    kakaoLink: string;
    instaLink: string;
  };
  sections: {
    hero: {
      title: string;
      subtitle: string;
      bgImage: string;
    };
    about: {
      title: string;
      content: string;
      image: string;
    };
    pricing: {
      items: { time: string; price: string; nineHolePrice?: string; description: string }[];
    };
    facility: {
      items: { name: string; description: string; image: string }[];
    };
  };
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
}
