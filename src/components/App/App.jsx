import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authentication from '../../components/Authentication/Authentication';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Landing from '../../containers/Landing/HeaderSection';
import Home from '../../containers/Landing/Home';
import Form from '../../components/Modals/Form';
import {
	tourism,
	educationOpportunities,
	visaApplication,
	adminProfiles,
	publicNotice,
	links,
	dashboardList,
	dashboardPages,
} from '../../helpers/data';
import Footer from '../../containers/Landing/Footer';
import PageLayout from '../../containers/Landing/PageLayout';
import Collection from '../../containers/Dashboard/Collection';
import Users from '../../containers/Dashboard/Users';
import DashboardSideNav from '../../containers/Dashboard/DashboardSideNav';
import Chat from '../../containers/Dashboard/Chat';
import { connect } from 'react-redux';
import { getPages } from '../../redux/action-creators/pages';
import Tourism from '../Tourism/Tourism';
import Education from '../Education/Education';
import AdminProfiles from '../AdminProfiles/AdminProfiles';
import VisaApplication from '../VisaApplication/VisaApplication';
import PublicNoticeBoard from '../PublicNoticeBoard/PublicNoticeBoard';
import AboutTheEmbassy from '../VisaApplication/AboutTheEmbassy';
import MasterPage from '../../containers/Landing/MasterPage';

const App = (props) => {
	const [admin, setAdmin] = useState(false);
	const { getPages, pageInfo } = props;

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			const user = JSON.parse(atob(token.split('.')[1]));
			return setAdmin(user.is_admin ? true : false);
		}
		// getPages(token);
	}, [admin]);
	return (
		<BrowserRouter>
			<Switch>
				{admin ? (
					<div className="container">
						<DashboardSideNav lists={dashboardList} />
						<div className="dashboard-main">
							{/* <Route exact path="/dashboard" component={Dashboard} /> */}
							<Route exact path="/dashboard-users" component={() => <Users users={dashboardPages} />} />
							<Route
								exact
								path="/dashboard-collection"
								component={() => <Collection pages={dashboardPages} />}
							/>
							<Route exact path="/dashboard-chart" component={() => <Chat users={dashboardPages} />} />
						</div>
					</div>
				) : (
					<div className="wrapper">
						<div className="container-fluid">
							<Landing />
							<Route exact path="/" component={Home} />
							<Route exact path="/auth" component={Authentication} />
							{/* <Route exact path="/test" component={PageLayout} /> */}
							<Route
								exact
								path="/tourism"
								component={() => <MasterPage type="tourism" information={tourism} page={pageInfo} />}
							/>
							<Route
								exact
								path="/about-us"
								component={() => <MasterPage type="about-us" information={tourism} />}
							/>
							<Route
								exact
								path="/about-embassy"
								component={() => <MasterPage type="about-embassy" information={tourism} />}
							/>
							<Route
								exact
								path="/ambassador-message"
								component={() => <MasterPage type="ambassador’s-message" information={tourism} />}
							/>
							<Route
								exact
								path="/diplomatic-staff"
								component={() => <MasterPage type="diplomatic-staff" information={tourism} />}
							/>
							<Route
								exact
								path="/about-uganda"
								component={() => <MasterPage type="about-uganda" information={tourism} />}
							/>
							<Route
								exact
								path="/national-parks-in-uganda"
								component={() => <MasterPage type="national-parks-in-uganda" information={tourism} />}
							/>
							<Route exact path="/register" component={() => <Form information={tourism} />} />
							<Route
								exact
								path="/education"
								component={() => <MasterPage type="education" information={educationOpportunities} />}
							/>
							<Route
								exact
								path="/consular-services"
								component={() => (
									<MasterPage type="consular-services" information={educationOpportunities} />
								)}
							/>
							<Route
								exact
								path="/visa-application"
								component={() => <MasterPage type="visa-application" information={visaApplication} />}
							/>
							<Route
								exact
								path="/why-invest-in-uganda"
								component={() => (
									<MasterPage type="why-invest-in-uganda" information={visaApplication} />
								)}
							/>
							<Route
								exact
								path="/trade-commerce"
								component={() => (
									<MasterPage type={`trade-&-commerce`} information={visaApplication} />
								)}
							/>
							<Route
								exact
								path="/banks-in-uganda"
								component={() => <MasterPage type="banks-in-uganda" information={visaApplication} />}
							/>
							<Route
								exact
								path="/admin-profile"
								component={() => <MasterPage type="admin-profiles" information={visaApplication} />}
							/>
							<Route
								exacts
								path="/public-notice-board"
								component={() => <MasterPage type="public-notice-board" information={publicNotice} />}
							/>
							{/* <Route component={NotFound} /> */}
							<Footer links={links} />
						</div>
					</div>
				)}
			</Switch>
		</BrowserRouter>
	);
};

const mapStateToProps = (state) => ({
	pageInfo: state.pages.getPages,
	aPageInfo: state.pages.getPage,
});
export default App;
