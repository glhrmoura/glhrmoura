export interface Link {
  page: string;
  github?: string;
}

export interface Project {
  title: string;
  link: Link;
  description: string;
  imageUrl: string;
}