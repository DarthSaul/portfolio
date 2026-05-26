// Renders a small "Reply via email" link at the bottom of each post. Acts as
// a low-friction comments substitute — readers tap and get a prefilled
// composer.
//
// Configure the recipient address via the VITE_REPLY_EMAIL env var. Posts can
// opt out by setting `replies: false` in their frontmatter.

import { SITE_URL } from './Seo';

// TODO(saul): swap in the real address once you've decided on one.
const FALLBACK_EMAIL = 'hello@saulgraves.com';

const ReplyByEmail = ({ postTitle, postPath }) => {
	const email = import.meta.env.VITE_REPLY_EMAIL || FALLBACK_EMAIL;
	const subject = encodeURIComponent(`Re: ${postTitle}`);
	const body = encodeURIComponent(`\n\n— in reply to ${SITE_URL}${postPath}`);
	const href = `mailto:${email}?subject=${subject}&body=${body}`;
	return (
		<p className="reply-by-email">
			Got a thought on this? <a href={href}>Reply via email</a>.
		</p>
	);
};

export default ReplyByEmail;
