import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const articles = [{
    title: "Review of Review",
    date: "2024-02-28",
    slug: "2024/02/review-of-review",
  }, {
    title: "Say Something",
    date: "2025-05-12",
    slug: "2025/01/say-something",
  }]
  return (
    <>
      <h1>Welcome to Leimah's Blog</h1>

      <div>
        <h2>Blog list:</h2>

        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <a href={`/blog/${article.slug}`}>
                [{article.date}] {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
