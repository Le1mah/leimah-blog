import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="Leimah's Blog">
            Leimah's Blog
          </a>
        </div>
      </div>
    </header>
  );
});
