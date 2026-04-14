import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  allArticles,
  getCategoryColorClass,
} from '@/lib/blog-articles'

export function BlogHighlights() {
  const posts = allArticles.slice(0, 3)

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Shopping guides, delivery tips, and local insights for Enugu
            residents.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${getCategoryColorClass(post.categoryColor)}`}
              >
                {post.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-orange-600">
                {post.headline}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-600">
                {post.description}
              </p>
              <span className="mt-4 text-sm font-medium text-orange-600">
                Read article &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            View all articles
          </Link>
        </div>
      </Container>
    </section>
  )
}
