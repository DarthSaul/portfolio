import { useParams, Link } from 'react-router';
import { MDXProvider } from '@mdx-js/react';
import { getPost, adjacentPosts } from '../utilities/posts';
import Seo from '../components/blog/Seo';
import PostMeta from '../components/blog/PostMeta';
import ReplyByEmail from '../components/blog/ReplyByEmail';
import PrevNext from '../components/blog/PrevNext';
import mdxComponents from '../components/mdx/MDXComponents';
import '../css/Blog.css';
import '../css/Mdx.css';

const NotFound = () => (
	<div className="content-container">
		<div className="blog-page-wrapper">
			<h1 className="blog-heading">Post not found</h1>
			<p className="blog-coming-soon">
				<Link to="/blog">← Back to blog</Link>
			</p>
		</div>
	</div>
);

const BlogPostPage = () => {
	const { slug } = useParams();
	const post = getPost(slug);
	if (!post) return <NotFound />;

	const { Component } = post;
	const { prev, next } = adjacentPosts(post.slug);
	const path = `/blog/${post.slug}`;

	return (
		<div className="content-container">
			<Seo
				title={post.title}
				description={post.description}
				canonical={post.canonical}
				path={path}
				type="article"
				publishedTime={post.date}
				tags={post.tags}
			/>
			<article className="blog-page-wrapper blog-post">
				<header className="blog-post-header">
					<h1 className="blog-post-title">{post.title}</h1>
					{post.description && <p className="blog-post-lede">{post.description}</p>}
					<PostMeta date={post.date} readingTime={post.readingTime} tags={post.tags} />
				</header>

				<div className="blog-post-body">
					<MDXProvider components={mdxComponents}>
						<Component />
					</MDXProvider>
				</div>

				<footer className="blog-post-footer">
					{post.replies && <ReplyByEmail postTitle={post.title} postPath={path} />}
					<PrevNext prev={prev} next={next} />
					<p className="blog-back-link">
						<Link to="/blog">← All posts</Link>
					</p>
				</footer>
			</article>
		</div>
	);
};

export default BlogPostPage;
