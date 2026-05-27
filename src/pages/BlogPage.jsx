import { Link } from 'react-router';
import { listPosts } from '../utilities/posts';
import Seo from '../components/blog/Seo';
import PostMeta from '../components/blog/PostMeta';
import WaveDivider from '../components/dev/WaveDivider';
import '../css/Blog.css';

const BlogPage = () => {
	const posts = listPosts();
	return (
		<div className="content-container">
			<Seo title="Blog" description="Essays and notes on building software, by Saul Graves." path="/blog" />
			<div className="blog-page-wrapper">
				<h1 className="blog-heading">The Blog</h1>
				<p className="blog-subtitle">AI-free zone 🙅‍♂️ thoughts are exclusively off-the-dome.</p>
				<WaveDivider />
				{posts.length === 0 ? (
					<p className="blog-coming-soon">No posts yet, check back soon.</p>
				) : (
					<ul className="blog-index-list">
						{posts.map((post) => (
							<li key={post.slug} className="blog-index-item">
								<h3 className="blog-index-title">
									<Link to={`/blog/${post.slug}`}>{post.title}</Link>
								</h3>
								{post.description && <p className="blog-index-desc">{post.description}</p>}
								<PostMeta date={post.date} readingTime={post.readingTime} tags={post.tags} />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default BlogPage;
