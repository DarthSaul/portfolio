// Component map injected into every MDX render. Extend this to override more
// HTML tags or to expose additional shortcodes. Anything left out falls back
// to the default HTML element MDX would render.

import { Link } from 'react-router';
import Callout from './Callout';
import Aside from './Aside';

const isExternal = (href = '') => /^https?:\/\//i.test(href);

// `<a>` — internal links route through react-router so we don't reload the SPA;
// external links open in a new tab with safe rel attributes.
const MdxLink = ({ href = '', children, ...rest }) => {
	if (isExternal(href)) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
				{children}
			</a>
		);
	}
	return (
		<Link to={href} {...rest}>
			{children}
		</Link>
	);
};

// `<img>` — wrap in a figure when an `alt` is provided so we can render a
// caption later; for now it just centers and constrains width.
const MdxImg = ({ alt, ...rest }) => (
	<figure className="mdx-figure">
		<img alt={alt || ''} loading="lazy" decoding="async" {...rest} />
		{alt && <figcaption className="mdx-figcaption">{alt}</figcaption>}
	</figure>
);

// `<pre>` from Shiki already carries `data-language`. We pass it through —
// styling lives in css/Mdx.css and rides on .shiki classes.
const MdxPre = (props) => <pre className="mdx-pre" {...props} />;

// Inline `<code>` (i.e. not inside <pre>). MDX wraps code blocks in <pre><code>,
// and Shiki rewrites <code> on those, so this only targets inline usage.
const MdxCode = (props) => <code className="mdx-code-inline" {...props} />;

const MdxBlockquote = (props) => <blockquote className="mdx-blockquote" {...props} />;

const mdxComponents = {
	h1: (props) => <h1 className="mdx-h1" {...props} />,
	h2: (props) => <h2 className="mdx-h2" {...props} />,
	h3: (props) => <h3 className="mdx-h3" {...props} />,
	a: MdxLink,
	img: MdxImg,
	pre: MdxPre,
	code: MdxCode,
	blockquote: MdxBlockquote,
	// Shortcodes available inside any post without an import.
	Callout,
	Aside,
};

export default mdxComponents;
