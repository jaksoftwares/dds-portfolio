export interface Project {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  status: 'live' | 'development' | 'maintenance';
  launchDate: string;
  screenshot?: string;
  keyMetrics?: {
    [key: string]: string;
  };
  technicalHighlights?: string[];
}