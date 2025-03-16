
export interface Article {
  id: string;
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
  coverImage: string;
}

export interface Talk {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  slideUrl?: string;
  videoUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
