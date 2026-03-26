import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../../css/Nav.css';

// Restore persisted theme before first render
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

const toggleTheme = () => {
	const html = document.documentElement;
	const next = html.dataset.theme === 'light' ? 'dark' : 'light';
	html.dataset.theme = next;
	localStorage.setItem('theme', next);
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
							<RouterLink to="/about">About</RouterLink>
							<RouterLink to="/blog">Blog</RouterLink>
						</div>
						<ThemeToggle className="theme-toggle-desktop" />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HoNav;
