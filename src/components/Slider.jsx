import React from 'react';

const Slider = ({ setDarkMode }) => {
	return (
		<div className='slider-container'>
			<label class='switch'>
				<input
					type='checkbox'
					id='togBtn'
					onClick={() => {
						setDarkMode((prev) => !prev);
					}}
				/>
				<div className='slider round'>
					<span className='on'>☀️</span>
					<span className='off'>🌕</span>
				</div>
			</label>
		</div>
	);
};

export default Slider;
