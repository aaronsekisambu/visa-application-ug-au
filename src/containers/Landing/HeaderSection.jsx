import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import userProfile from '../../assets/images/ugp.jpeg';
import TopNavigation from '../../components/Navigation/TopNavigation';
import { withRouter } from 'react-router-dom';

const HeaderSection = (props) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [download, setDownloadFile] = useState(false);
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);

	useEffect(() => {
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
			<div
				style={{
					width: '980px',
					top: 0,
					zIndex: 9999,
				}}
			>
				{' '}
				<TopNavigation
					width={width}
					userProfile={userProfile}
					username="user name"
					isSideNavOpen={isSideNavOpen}
				/>
				<Header userProfile={userProfile} username="user name" width={width} />
				<Navigation
					closeSideNav={closeSideNav}
					isSideNavOpen={isSideNavOpen}
					width={width}
					height={height}
					closeSideNavOnClick={closeSideNavOnClick}
				/>
			</div>
		</Fragment>
	);
};

export default withRouter(HeaderSection);
