import { Link as RouterLink, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../../css/Nav.css';

// Restore persisted theme before first render, falling back to system preference
try {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		document.documentElement.dataset.theme = savedTheme;
	} else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
	}
} catch (_) {}

const toggleTheme = () => {
	const html = document.documentElement;
	const next = html.dataset.theme === 'light' ? 'dark' : 'light';
	html.dataset.theme = next;
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
