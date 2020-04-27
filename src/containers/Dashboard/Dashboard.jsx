import React, { Fragment, useEffect, useState } from 'react';
import DashboardSideNav from './DashboardSideNav';
import DashboardContent from './DashboardContent';
import { dashboardList } from '../../helpers/data';

const Dashboard = (props) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [download, setDownloadFile] = useState(false);
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);

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
			<div className="container">
				{/* <DashboardSideNav lists={dashboardList} /> */}
				{/* <div className="dashboard-main">
					<DashboardContent />
				</div> */}
			</div>
		</Fragment>
	);
};

export default Dashboard;
