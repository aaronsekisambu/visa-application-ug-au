import React, { Fragment, useEffect, useRef } from 'react';
import { TweenLite, TweenMax, Tween, Power3, TimelineLite } from 'gsap';

const CoverImage = (props) => {
	const { coverImage, title, description, command } = props;
	let cover = useRef(null);

	let tl = new TimelineLite();

	useEffect(() => {
		const image = cover.firstElementChild;
		const content = cover.lastElementChild;
		TweenMax.to(cover, 0, { CSS: { visibility: 'visible' } });
		tl.from(image, 1, { x: 1280, ease: Power3.easeOut })
			.from(image, 1.5, { scale: 1.2, ease: Power3.easeInOut }, 0.5)
			.from(content, 1, { x: -1280, ease: Power3.easeOut }, .2)
			.from(content, 1.5, { scale: 1.2, ease: Power3.easeOut }, .2);
		// return () => {
		// 	cleanup
		// }
	}, []);
	return (
		<Fragment>
			<div className="site-blocks-cover shadow-sm" style={{ overflow: 'hidden' }}>
				<div className=" cover-image-section" ref={(el) => (cover = el)}>
					<img src={coverImage} alt="Image" className="img-fluid img-absolute mb-5" />
					<div
						className=" col-md-8 aos-init aos-animate"
						style={{ position: 'relative' }}
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="row mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
							<div className="mr-auto">
								<h1 className="text-sm">{title}</h1>
								<p className="mb-5">{description}</p>
								<div>
									<a href="#" className="btn btn-primary mr-2 mb-2">
										{command}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CoverImage;
