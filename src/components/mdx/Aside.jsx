// `<Aside>` — a tangential thought / footnote-style block. Lighter than Callout.

const Aside = ({ children }) => (
	<aside className="mdx-aside">
		<div className="mdx-aside-rule" aria-hidden="true" />
		<div className="mdx-aside-body">{children}</div>
	</aside>
);

export default Aside;
