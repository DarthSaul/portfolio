// Bottom-of-post navigation. `prev` is the newer post, `next` is the older —
// matches how most blog UIs read.

import { Link } from 'react-router';

const PrevNext = ({ prev, next }) => {
	if (!prev && !next) return null;
	return (
		<nav className="post-prev-next" aria-label="More posts">
			{prev ? (
				<Link to={`/blog/${prev.slug}`} className="post-prev-next-link" rel="prev">
					<span className="post-prev-next-label">← Newer</span>
					<span className="post-prev-next-title">{prev.title}</span>
				</Link>
			) : (
				<span />
			)}
			{next ? (
				<Link
					to={`/blog/${next.slug}`}
					className="post-prev-next-link post-prev-next-link-right"
					rel="next"
				>
					<span className="post-prev-next-label">Older →</span>
					<span className="post-prev-next-title">{next.title}</span>
				</Link>
			) : (
				<span />
			)}
		</nav>
	);
};

export default PrevNext;
