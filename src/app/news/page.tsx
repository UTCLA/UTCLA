import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NewsCard from "@/components/news/NewsCard";
import { getNewsArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  const articles = getNewsArticles();

  return (
    <>
      <PageBanner
        title="News & Updates"
        description="Latest developments from the United Tribal Countries Land Alliance."
      />
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {articles.length === 0 ? (
          <p className="text-center text-charcoal-500">
            No news articles yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
