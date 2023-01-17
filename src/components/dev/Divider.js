import React from 'react';
import CodePerson from '../../assets/undraw_code_inspection_bdl7 (1).svg';
import PWA from '../../assets/undraw_progressive_app_m-9-ms.svg';

const Divider = (props) => {
	const options = {
		svg: props.option === 1 ? PWA : CodePerson,
		svgStyle: {
			width: props.option === 1 ? '600px' : '300px',
			maxWidth: props.option === 1 ? '100%' : '90%',
		},
		classes:
			props.option === 1
				? 'col-xs-12 text-center pt-5'
				: 'col-xs-12 text-center py-5',
	};
	return (
		<div className="container-fluid">
			<div className="row">
				<div className={options.classes}>
					<img
						src={options.svg}
						style={options.svgStyle}
						alt="Person and website"
					/>
				</div>
			</div>
		</div>
	);
};

export default Divider;
