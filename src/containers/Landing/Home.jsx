import React, { Fragment, useEffect, useState } from 'react';
import ReadMoreReact from 'read-more-react';
import { text } from '../../helpers/data';
import { educationOpportunities as opportunities } from '../../helpers/data';
import HelpChat from '../../components/HelpChat/HelpChat';
import patrickMuganda from '../../assets/images/Mr.PatrickMugandaGuma.png';
import lwabi from '../../assets/images/Ms.Carol-Lwabi.png';
import james from '../../assets/images/Mr.James-Muggaga.png';

const Home = (props) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [download, setDownloadFile] = useState(false);
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);

	useEffect(() => {
		let token = new URLSearchParams(props.location.search).get('token');
		if (token) {
			localStorage.setItem('token', token);
			const user = JSON.parse(atob(token.split('.')[1]));
			user.isAdmin ? props.history.push('/dashboard') : props.history.push('/');
		}
		const updateWindowDimensions = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};
		window.addEventListener('resize', updateWindowDimensions);
		return () => {
			window.removeEventListener('resize', updateWindowDimensions);
		};
	}, [width, height]);
	const openModal = (e) => {
		e.preventDefault();
		setIsModalOpen(!isModalOpen);
	};
	const downloadFile = (e) => {
		setDownloadFile(!download);
	};
	const closeSideNav = (e) => {
		e.preventDefault();
		setIsSideNavOpen(!isSideNavOpen);
	};
	const closeSideNavOnClick = (e) => {
		const {
			history: {
				location: { hash },
			},
		} = props;
		if (hash) {
			return setIsSideNavOpen(false);
		}
	};
	return (
		<Fragment>
			<div className="">
				<div className="home">
					<aside className="side-a">
						<div className="messages bg-light p-2">
							<h3 className="h3 text-primary">
								Address on the Corona virus (COVID 19) and guidelines on preventive measures
							</h3>
							<img
								src="https://berlin.mofa.go.ug/files/media/Museveni%20on%20Covid19.jpg"
								alt="musevni"
								className="message-img"
							/>
							<div className="read-more">
								<ReadMoreReact
									text={text.m7}
									min={100}
									ideal={300}
									max={500}
									readMoreText="Read more..."
								/>
							</div>
						</div>{' '}
						{/* <div className="messages bg-light p-2">
							<h3 className="h3 text-primary">Another title here</h3>
							<img
								src="https://canberra.mofa.go.ug/files/media/Independence%20Day.jpg"
								alt="musevni"
								className="message-img"
							/>
							<div className="read-more">
								<ReadMoreReact
									text={text.ambassador}
									min={100}
									ideal={300}
									max={500}
									readMoreText="Read more..."
								/>
							</div>
						</div> */}
					</aside>
					<aside className="aside-b">
						<div className="d-flex flx-row justify-content-around">
							<div className="d-flex flex-column aside-more-info">
								{' '}
								<div className="aside-more-info-top mb-3">
									{' '}
									<div>
										{' '}
										<img src={patrickMuganda} alt="plane" />
										<a href="#" target="_blank">
											H.E Professor Joyce Kakuramatsi Kikafunda
										</a>
									</div>
									{/* <div>
										{' '}
										<img src={lwabi} alt="plane" />
										<a href="#" target="_blank">
											Mr. Patrick Muganda Goma MINISTER COUNSELOR
										</a>
									</div>{' '} */}
								</div>
								{/* <div>
									{' '}
									<img src={james} alt="plane" />
									<a href="#" target="_blank">
										Ms. Tiisa Suzan Mugwanya THIRD SECRETARY
									</a>
								</div> */}
							</div>
						</div>
					</aside>
				</div>
				<HelpChat />
			</div>
		</Fragment>
	);
};

export default Home;
