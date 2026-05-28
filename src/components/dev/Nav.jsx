import { Link as RouterLink, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../../css/Nav.css';

// Matches --color-background per theme in src/css/App.css. Mirrored here
// because the mobile address-bar tint is set via <meta name="theme-color">,
// which is outside CSS variable scope.
const THEME_COLOR = { dark: '#16132a', light: '#fafafa' };

// Applies a theme: updates the data-theme attribute (which the CSS variables
// hang off of) and keeps the <meta name="theme-color"> tag in sync so the
// mobile address-bar tracks the in-app toggle, not just OS preference.
const applyTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) meta.setAttribute('content', THEME_COLOR[theme] || THEME_COLOR.dark);
};

// Restore persisted theme before first render, falling back to system
// preference. Guarded for SSR (no `window`/`document` during prerender).
if (typeof window !== 'undefined') {
	try {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			applyTheme(savedTheme);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			applyTheme(prefersDark ? 'dark' : 'light');
		}
	} catch (_) {}
}

const toggleTheme = () => {
	const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
	applyTheme(next);
	try {
		localStorage.setItem('theme', next);
	} catch (_) {}
};

const ThemeToggle = ({ className = '' }) => (
	<button className={`theme-toggle ${className}`} aria-label="Toggle theme" onClick={toggleTheme}>
		<span className="theme-toggle-knob">
			<FontAwesomeIcon icon={faSun} className="theme-icon theme-icon-sun" />
			<FontAwesomeIcon icon={faMoon} className="theme-icon theme-icon-moon" />
		</span>
	</button>
);

const HoNav = () => {
	return (
		<div className="top-navbar">
			<nav className="inner-nav">
				<div className="nav-inner-wrapper">
					<div className="nav-header">
						<h2 className="nav-title">
							<RouterLink to="/">Saul <span>Graves</span></RouterLink>
						</h2>
						<ThemeToggle className="theme-toggle-mobile" />
					</div>

					<div className="nav-links-row">
						<div className="nav-items">
							<NavLink to="/about">About</NavLink>
							<NavLink to="/blog">Blog</NavLink>
						</div>
						<ThemeToggle className="theme-toggle-desktop" />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HoNav;
