"use client";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InDepthArticle {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface InDepthArticlesProps {
  articles: InDepthArticle[];
}

export function InDepthArticles({ articles }: InDepthArticlesProps) {
  return (
    <section className="px-4 py-12 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-poppins text-[#222222] leading-tight">
                  {article.title}
                </h3>
                <p className="text-[#555555] font-open-sans">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
