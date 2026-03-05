import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NewsArticle } from "@/types";

const newsDirectory = path.join(process.cwd(), "src/data/news");

export function getNewsArticles(): NewsArticle[] {
  const files = fs.readdirSync(newsDirectory).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(newsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      content,
    } as NewsArticle;
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNewsArticle(slug: string): NewsArticle | undefined {
  const filePath = path.join(newsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    content,
  } as NewsArticle;
}
