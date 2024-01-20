export interface Link {
  page: string;
  github?: string;
}

export interface Project {
  title: string;
  description: string;
  link: Link;
}