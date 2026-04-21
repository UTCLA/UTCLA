import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNewsArticle, getNewsArticles } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getNewsArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  const date = new Date(article.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="relative bg-charcoal-900 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-earth-900 to-charcoal-900 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-ochre-900)_0%,_transparent_50%)] opacity-40" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link
            href="/news"
            className="text-charcoal-200 hover:text-ochre-400 text-sm transition-colors mb-6 inline-block"
          >
            &larr; Back to News
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="h-px w-16 bg-ochre-500 mb-4" />
          <div className="flex items-center gap-4 text-sm text-charcoal-300">
            <time>{date}</time>
            <span>&middot;</span>
            <span>{article.author}</span>
          </div>
        </div>
      </section>
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal-900 prose-p:text-charcoal-700 prose-li:text-charcoal-700 prose-strong:text-charcoal-900 prose-a:text-ochre-600 hover:prose-a:text-ochre-700">
          <MDXRemote source={article.content} />
        </div>
      </article>
    </>
  );
}
