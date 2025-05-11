import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
    useStyles$(styles);
    useStyles$(`
        	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
        }
    }
    `);
    return (
        <div class="markdown-body">
            <Slot />
        </div>
    );
});