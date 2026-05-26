// Date · reading time · tags row used at the top of each post and as a
// secondary line on the index.

import { Link } from 'react-router';
import { formatDate } from '../../utilities/posts';

const PostMeta = ({ date, readingTime, tags = [], linkTags = true }) => (
	<div className="post-meta">
		<time dateTime={date}>{formatDate(date)}</time>
		{readingTime ? <span className="post-meta-sep">·</span> : null}
		{readingTime ? <span>{readingTime} min read</span> : null}
		{tags.length > 0 && <span className="post-meta-sep">·</span>}
		{tags.length > 0 && (
			<ul className="post-meta-tags">
				{tags.map((t) =>
					linkTags ? (
						<li key={t}>
							<Link to={`/blog/tag/${t}`}>#{t}</Link>
						</li>
					) : (
						<li key={t}>#{t}</li>
					),
				)}
			</ul>
		)}
	</div>
);

export default PostMeta;
