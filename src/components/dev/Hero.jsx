import '../../css/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
	AOS.init();

	return (
		<div className="hero-wrapper" data-aos="fade" data-aos-duration="500">
			<div className="hero-body">
				<div className="hero-avatar-wrap">
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
