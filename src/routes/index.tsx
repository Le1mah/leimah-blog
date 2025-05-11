import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  const articles = [{
    title: "Review of Review",
    date: "2024-02-28",
    slug: "2024/02/review-of-review",
  }, {
    title: "Content-Length 以及 Transfer-Encoding: chunked 引发的一些 Bug",
    date: "2025-02-04",
    slug: "2025/02/content-length-and-chunked",
  }, {
    title: "Say Something",
    date: "2025-05-12",
    slug: "2025/01/say-something",
  }]
  return (
    <>
      <div class={[styles.posts, "container"]}>
        <h2>Latest posts:</h2>

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
  title: "Leimah's Himitsu Kichi",
  meta: [
    {
      name: "description",
      content: "Blog of Leimah. Hoarded my thoughts.",
    },
  ],
};
