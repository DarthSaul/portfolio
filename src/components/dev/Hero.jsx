import { useState, useRef, useEffect } from 'react';
import '../../css/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const COLORS = [
	'hsl(0,100%,65%)',   'hsl(20,100%,65%)',  'hsl(40,100%,65%)',
	'hsl(60,100%,65%)',  'hsl(80,100%,65%)',  'hsl(120,100%,65%)',
	'hsl(160,100%,65%)', 'hsl(200,100%,65%)', 'hsl(240,100%,65%)',
	'hsl(280,100%,65%)', 'hsl(320,100%,65%)', 'hsl(340,100%,65%)',
];

// Vertical offset from wrapper center → places origin at forehead level.
// Avatar is 134px tall centered in 150px wrapper: head top ≈ −67px from center.
// −52px lands just inside the forehead.
const ORIGIN_Y = -52;

let uid = 0;

function newRockets() {
	const count = 2 + Math.floor(Math.random() * 3);
	return Array.from({ length: count }, () => {
		const angleDeg  = -90 + (Math.random() - 0.5) * 70;
		const dist      = 35 + Math.random() * 30;
		const rad       = (angleDeg * Math.PI) / 180;
		const tx        = Math.cos(rad) * dist;
		const ty        = Math.sin(rad) * dist;
		const rotateDeg = Math.atan2(tx, -ty) * (180 / Math.PI);
		return {
			id: uid++,
			type: 'rocket',
			tx, ty, dist, rotateDeg,
			// Absolute position from wrapper center where this rocket ends up —
			// used as the spark explosion origin.
			sparkOx: tx,
			sparkOy: ORIGIN_Y + ty,
			color:    COLORS[Math.floor(Math.random() * COLORS.length)],
			duration: 0.25 + Math.random() * 0.15,
		};
	});
}

function newSparks(ox, oy, color) {
	const count = 10 + Math.floor(Math.random() * 7);
	return Array.from({ length: count }, () => {
		const angle = Math.random() * 360;
		const dist  = 15 + Math.random() * 35;
		const rad   = (angle * Math.PI) / 180;
		return {
			id: uid++,
			type: 'spark',
			ox, oy,
			tx:       Math.cos(rad) * dist,
			ty:       Math.sin(rad) * dist,
			color,
			size:     2.5 + Math.random() * 2.5,
			duration: 0.4 + Math.random() * 0.35,
		};
	});
}

const Hero = () => {
	AOS.init();
	const [particles, setParticles] = useState([]);
	const timerRef = useRef(null);

	useEffect(() => () => clearInterval(timerRef.current), []);

	const startFireworks = () => {
		const fire = () => setParticles(prev => [...prev, ...newRockets()]);
		fire();
		timerRef.current = setInterval(fire, 380);
	};

	const stopFireworks = () => clearInterval(timerRef.current);

	const onRocketEnd = (rocket) => {
		setParticles(prev => [
			...prev.filter(p => p.id !== rocket.id),
			...newSparks(rocket.sparkOx, rocket.sparkOy, rocket.color),
		]);
	};

	const onSparkEnd = (id) => {
		setParticles(prev => prev.filter(p => p.id !== id));
	};

	return (
		<div className="hero-wrapper" data-aos="fade" data-aos-duration="500">
			<div className="hero-body">
				<div
					className="hero-avatar-wrap"
					onMouseEnter={startFireworks}
					onMouseLeave={stopFireworks}
				>
					{particles.map(p => p.type === 'rocket' ? (
						<span
							key={p.id}
							className="firework-rocket"
							style={{
								'--origin-y': `${ORIGIN_Y}px`,
								'--rotate':   `${p.rotateDeg}deg`,
								'--dist':     `${p.dist}px`,
								background: p.color,
								animationDuration: `${p.duration}s`,
							}}
							onAnimationEnd={() => onRocketEnd(p)}
						/>
					) : (
						<span
							key={p.id}
							className="firework-spark"
							style={{
								'--ox': `${p.ox}px`,
								'--oy': `${p.oy}px`,
								'--tx': `${p.tx}px`,
								'--ty': `${p.ty}px`,
								background: p.color,
								width:  `${p.size}px`,
								height: `${p.size}px`,
								animationDuration: `${p.duration}s`,
							}}
							onAnimationEnd={() => onSparkEnd(p.id)}
						/>
					))}
					<img src="/avatar-thin.svg" alt="avatar" className="hero-avatar" />
				</div>
				<div className="hero-text">
					<div className="hero-headline">
						<span className="hero-title">Fullstack Engineer</span>
						<span>I build awesome user experiences for the web.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
