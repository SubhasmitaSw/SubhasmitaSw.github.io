
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
  venue: string;
  eventLink?: string;
  date?: string;
  description: string;
  slideUrl?: string;
  videoUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
