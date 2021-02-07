import React from 'react';
import cogs from '../assets/icons/icon_cogs.svg';
import controller from '../assets/icons/icon_controller.svg';
import phone from '../assets/icons/icon_phone.svg';
import world from '../assets/icons/icon_world.svg';

const LowerHome = () => {
	return (
		<div className='lower-home-container'>
			<div className='circle-container'>
				<div className='circle-inner'>
					<h5>
						<span>
							Free 30 minute consultation to discuss your requirements.
						</span>{' '}
						Call 01256 637930
					</h5>
				</div>
			</div>
			<div className='geeks-section'>
				<h2>How can our geeks help you?</h2>
				<div className='card-container'>
					<div className='card'>
						<div className='img-container'>
							<img src={world} alt='world' />
						</div>
						<h4>CMS & Websites</h4>
						<p>
							Data driven, CMS and e-commerce enabled websites designed & built.
						</p>
					</div>
					<div className='card'>
						<div className='img-container'>
							<img src={phone} alt='phone' />
						</div>
						<h4>Web Apps</h4>
						<p>
							Online and offline html web applications that works like a native
							app with the ability to work offline without the need to install.
						</p>
					</div>
					<div className='card'>
						<div className='img-container'>
							<img src={controller} alt='controller' />
						</div>
						<h4>HTML 5 and WebGL games</h4>
						<p>
							Using cutting edge web technologies web can build games and
							interactive applications.
						</p>
					</div>
					<div className='card'>
						<div className='img-container'>
							<img src={cogs} alt='cogs' />
						</div>
						<h4>Custom applications & Bespoke Software</h4>
						<p>
							Bespoke applications and business tools both on the web and
							Microsoft Windows.
						</p>
					</div>
				</div>
			</div>
			<div className='call-us'>
				<h1>
					<span>Call us on </span>01256 637930
				</h1>
			</div>
			<div className='who-section'>
				<h1>Who we are</h1>
				<div className='who-section-text'>
					<p>
						What makes a web design business great? Is it the C#, HTML, CSS and
						design sites are made of? Or making large profits on every job? Or
						the shiny building with a frosted glass reception wall with the
						company logo in it?
						<br />
						We don't think so, we think what makes a business great is people.
						Forming lasting and good relationships with your clients is what
						it's about.
					</p>
					<p>
						We have a philosophy of putting our clients first. Of being honest,
						finding their needs and expectations within any project not just
						thinking of our own cold profit margin like many companies do. We
						are in this to help our clients, build great things for them and
						have little fun along the way.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LowerHome;
