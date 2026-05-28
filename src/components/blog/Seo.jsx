// Sets head tags (<title>, meta description, OG, Twitter card) so social
// scrapers (LinkedIn, Twitter, Facebook, Slack) pick them up.
//
// On the client, React 19 hoists <title>, <meta>, and <link> to <head>
// automatically. During the prerender pass (see scripts/prerender.mjs), the
// build script extracts them from the rendered body and moves them into
// <head> so first-paint HTML has the tags before JS executes.

const SITE_URL = 'https://saulgraves.com';
const SITE_NAME = 'Saul Graves';
const DEFAULT_DESCRIPTION =
	'Personal site and blog of Saul Graves — senior fullstack engineer based in NYC.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

const Seo = ({
	title,
	description = DEFAULT_DESCRIPTION,
	canonical,
	path = '/',
	image = DEFAULT_OG_IMAGE,
	type = 'website',
	publishedTime,
	tags = [],
}) => {
	const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
	const url = canonical || `${SITE_URL}${path}`;
	return (
		<>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />

			<meta property="og:type" content={type} />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />
			{publishedTime && <meta property="article:published_time" content={publishedTime} />}
			{tags.map((t) => (
				<meta key={t} property="article:tag" content={t} />
			))}

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</>
	);
};

export { SITE_URL, SITE_NAME };
export default Seo;
