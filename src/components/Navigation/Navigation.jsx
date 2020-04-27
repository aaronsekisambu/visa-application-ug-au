import React, { Fragment, useState, useEffect } from 'react';
import NavigationList from './NavigationList';
import { navigationList } from '../../helpers/data';
import logo from '../../assets/images/auUg.jpg';

const Navigation = (props) => {
	const { width, closeSideNav, isSideNavOpen, closeSideNavOnClick } = props;
	
	return (
		<Fragment>
			<button
				className="btn btn-primary"
				style={{
					display: width <= 990 ? 'block' : 'none',
					// margin: `${width <= 600 ? '-5em' : '-4em'} .5em 0`,
					position: 'fixed',
					zIndex: 9999,
				}}
				onClick={closeSideNav}
			>
				&#9776;
			</button>
			<nav
				className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top-nav-bar"
				style={{ display: width <= 990 ? 'none' : 'block', paddingLeft: 0 }}
			>
				<div className="collapse navbar-collapse">
					<NavigationList lists={navigationList.list} />
				</div>
			</nav>
			<div
				className="sidenav"
				style={{
					width: isSideNavOpen === true ? '50%' : 0,
					padding: isSideNavOpen === true ? '1em 2em 0' : 0,
				}}
			>
				<div className="navbar-brand logo">
					<img src={logo} alt="" />
				</div>
				<NavigationList
					lists={navigationList.list}
					closeSideNav={closeSideNav}
					menuList="menu"
					closeSideNavOnClick={closeSideNavOnClick}
				/>
			</div>
		</Fragment>
	);
};

export default Navigation;
