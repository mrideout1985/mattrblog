import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";
import styles from "./alert.module.scss";

export default function Alert({ preview }) {
	return (
		<div className={styles.container}>
			<Container>
				<div className={styles.preview}>
					{preview ? (
						<>
							This page is a preview.{" "}
							<a
								href="/api/exit-preview"
								className={styles.exitpreview}
							>
								Click here
							</a>{" "}
							to exit preview mode.
						</>
					) : (
						<>
							The source code for this blog is{" "}
							<a
								href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
								className={styles.visit}
							>
								available on GitHub
							</a>
							.
						</>
					)}
				</div>
			</Container>
		</div>
	);
}
