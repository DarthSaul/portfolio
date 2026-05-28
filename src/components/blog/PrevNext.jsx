// Bottom-of-post navigation. `prev` is the newer post, `next` is the older —
// matches how most blog UIs read.
//
// When there's no newer or older post (you're at the head or tail of the
// archive) we still render the slot so the row stays symmetric, but as a
// muted, aria-disabled placeholder with a "this is the latest/oldest" hint.

import { Link } from 'react-router';

const Slot = ({ side, post, emptyText }) => {
	const rightClass = side === 'next' ? ' post-prev-next-link-right' : '';
	const label = side === 'prev' ? '← Newer' : 'Older →';
	if (post) {
		return (
			<Link
				to={`/blog/${post.slug}`}
				className={`post-prev-next-link${rightClass}`}
				rel={side === 'prev' ? 'prev' : 'next'}
			>
				<span className="post-prev-next-label">{label}</span>
				<span className="post-prev-next-title">{post.title}</span>
			</Link>
		);
	}
	return (
		<div
			className={`post-prev-next-link post-prev-next-link-disabled${rightClass}`}
			aria-disabled="true"
		>
			<span className="post-prev-next-label">{label}</span>
			<span className="post-prev-next-empty">{emptyText}</span>
		</div>
	);
};

const PrevNext = ({ prev, next }) => {
	// One-post archive: nothing useful to navigate to, so skip the row entirely.
	if (!prev && !next) return null;
	return (
		<nav className="post-prev-next" aria-label="More posts">
			<Slot side="prev" post={prev} emptyText="This is the latest post" />
			<Slot side="next" post={next} emptyText="This is the oldest post" />
		</nav>
	);
};

export default PrevNext;
