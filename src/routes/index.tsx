import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <div class={[styles.posts, "container"]}>
        <h2>Latest posts:</h2>

        <ul>
          <li>
            <a href="/blog/2024/02/review-of-review">[2024-02-28] Review of Review</a>
          </li>
          <li>
            <a href="/blog/2025/02/content-length-and-chunked">[2025-02-04] Content-Length 以及 Transfer-Encoding: chunked 引发的一些 Bug</a>
          </li>
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
