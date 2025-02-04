import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Welcome to Leimah's Blog</h1>

      <div>
        <h2>Blog list:</h2>

        <ul>
          <li>
            <a href="/blog/2024/02/review-of-review">[2024-02-28] Review of Review</a>
          </li>
          <li>
            <a href="/blog/2025/02/content-length-and-chunked">[2025-02-04] Content-Length and Chunked</a>
          </li>
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
