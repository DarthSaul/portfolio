// `<Callout type="info|warn|tip">` — used inside MDX to highlight an aside.
// Bare-bones styling; restyle freely in css/Mdx.css.

const ICONS = {
	info: 'ℹ',
	warn: '⚠',
	tip: '✦',
};

const Callout = ({ type = 'info', title, children }) => {
	const variant = ICONS[type] ? type : 'info';
	return (
		<aside className={`mdx-callout mdx-callout-${variant}`} role="note">
			<div className="mdx-callout-header">
				<span className="mdx-callout-icon" aria-hidden="true">
					{ICONS[variant]}
				</span>
				{title && <span className="mdx-callout-title">{title}</span>}
			</div>
			<div className="mdx-callout-body">{children}</div>
		</aside>
	);
};

export default Callout;
