export interface Nation {
  id: string;
  name: string;
  region: string;
  description: string;
  coordinates: [number, number];
  territory: [number, number][];
  color: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  content: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "governance" | "legal" | "cultural" | "economic";
  filename: string;
  filePath?: string;
  fileType: string;
  fileSize: string;
}

export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}
