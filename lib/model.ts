export interface PostData {
  slug: string;
  content: string;
}
export interface ProjectData {
  title: string;
  excerpt: string;
  date: string;
  description: string;
  id: string;
  projectid: string;
  front: string[];
  back: string[];
  featured: boolean;
  link: string;
}

export interface PageProps {
  post?: PostData;
  db?: ProjectData;
  featuredProjects?: ProjectData[];
  allData?: ProjectData[];
}
