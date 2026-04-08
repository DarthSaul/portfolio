import { useId } from 'react';

const WaveDivider = () => {
	// useId produces values like ":r0:" — colons are invalid in SVG id attributes, so strip them
	const rawId = useId();
	const id = `wave-${rawId.replace(/:/g, '')}`;

	return (
		<svg
			width="100%"
			height="16"
			xmlns="http://www.w3.org/2000/svg"
			className="wave-divider"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id={id}
					x="0"
					y="0"
					width="40"
					height="16"
					patternUnits="userSpaceOnUse"
				>
					<path
						d="M0,8 C7,2 13,2 20,8 C27,14 33,14 40,8"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="16" fill={`url(#${id})`}/>
		</svg>
	);
};

export default WaveDivider;
