import { Routes, Route } from 'react-router';
import Nav from './components/dev/Nav';
import Work from './components/dev/Work';
import About from './components/dev/About';
import Hero from './components/dev/Hero';
import WaveDivider from './components/dev/WaveDivider';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import TagPage from './pages/TagPage';

import './css/App.css';

const MainPage = () => (
	<div className="content-container">
		<Hero />
		<WaveDivider />
		<Work />
		<WaveDivider />
		<About />
	</div>
);

// Router context is provided by the entry (BrowserRouter on the client,
// StaticRouter during prerender), so App only owns the route table.
const App = () => (
	<div className="main-page-container">
		<Nav />
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/blog" element={<BlogPage />} />
			<Route path="/blog/:slug" element={<BlogPostPage />} />
			<Route path="/blog/tag/:tag" element={<TagPage />} />
		</Routes>
	</div>
);

// The list of routes the prerender script walks. Static paths only — dynamic
// /blog/:slug and /blog/tag/:tag are expanded by the script using the posts
// utility so it stays in sync as posts come and go.
export const STATIC_ROUTES = ['/', '/about', '/blog'];

export default App;
