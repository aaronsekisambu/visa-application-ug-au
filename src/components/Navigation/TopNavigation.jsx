import React, { Fragment, useState, useEffect } from 'react';
import NavigationList from './NavigationList';
import { socialMediaIcons } from '../../helpers/data';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/images/auUg.jpg';

const TopNavigation = (props) => {
	const { width, token, userProfile, username, history, isSideNavOpen } = props;
	const authenticate = (e) => {
		e.preventDefault();
		history.push('/auth');
	};
	return (
		<Fragment>
			{/* <nav
				className="navbar navbar-expand-lg navbar-light shadow-sm  top-fixed-top-nav-bar"
				style={{ marginTop: '-0.5em' }}
			>
				<div className="navbar-brand logo">
					<img src={logo} alt="" />
					{/* {token ? (
						<div className="user-profile">
							<img src={userProfile} alt="" />
							<p className="h4">{username}</p>
						</div>
					) : (
						<button className="btn btn-light mr-5" onClick={authenticate}>
							Get Started
						</button>
					)} */}
				{/* </div>
				<NavigationList lists={socialMediaIcons} menuList="top-lists" />
			</nav> */}
		</Fragment>
	);
};

export default withRouter(TopNavigation);
