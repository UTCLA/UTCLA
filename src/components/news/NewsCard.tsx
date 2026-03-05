import Link from "next/link";
import type { NewsArticle } from "@/types";

export default function NewsCard({ article }: { article: NewsArticle }) {
  const date = new Date(article.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-lg border border-earth-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-1 bg-ochre-500" />
      <div className="p-6">
        <time className="text-xs text-charcoal-400 uppercase tracking-wide">
          {date}
        </time>
        <h3 className="font-heading text-xl font-bold text-charcoal-900 mt-2 mb-3">
          <Link
            href={`/news/${article.slug}`}
            className="hover:text-ochre-700 transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>
        <Link
          href={`/news/${article.slug}`}
          className="text-ochre-600 hover:text-ochre-700 text-sm font-medium transition-colors"
        >
          Read more &rarr;
        </Link>
      </div>
    </article>
  );
}
