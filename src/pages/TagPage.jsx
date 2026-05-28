import { useParams, Link } from 'react-router';
import { postsByTag } from '../utilities/posts';
import Seo from '../components/blog/Seo';
import PostMeta from '../components/blog/PostMeta';
import '../css/Blog.css';

const TagPage = () => {
	const { tag } = useParams();
	const posts = postsByTag(tag);
	return (
		<div className="content-container">
			<Seo
				title={`#${tag}`}
				description={`Posts tagged #${tag}`}
				path={`/blog/tag/${tag}`}
			/>
			<div className="blog-page-wrapper">
				<h2 className="blog-heading">
					Posts tagged <span className="blog-tag-name">#{tag}</span>
				</h2>
				{posts.length === 0 ? (
					<p className="blog-coming-soon">No posts under this tag yet.</p>
				) : (
					<ul className="blog-index-list">
						{posts.map((post) => (
							<li key={post.slug} className="blog-index-item">
								<h3 className="blog-index-title">
									<Link to={`/blog/${post.slug}`}>{post.title}</Link>
								</h3>
								{post.description && (
									<p className="blog-index-desc">{post.description}</p>
								)}
								<PostMeta
									date={post.date}
									readingTime={post.readingTime}
									tags={post.tags}
								/>
							</li>
						))}
					</ul>
				)}
				<p className="blog-back-link">
					<Link to="/blog">← All posts</Link>
				</p>
			</div>
		</div>
	);
};

export default TagPage;
