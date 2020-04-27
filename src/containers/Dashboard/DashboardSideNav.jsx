import React, { Fragment, useEffect, forceUpdate } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { dashboardList } from '../../helpers/data';

const DashboardSideNav = (props) => {
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		window.location.reload();
	};
	return (
		<Fragment>
			<div className="dashboard">
				<div className="dashboard-side-nav">
					<div>
						<div className="dashboard-humbugger">
							<div className="dashboard-close-btn">&#9776;</div>
							<img src="" alt="" />
						</div>
						<ul className="navbar-nav mt-lg-0 dashboard-item">
							{dashboardList.list.map((list, i) => {
								return (
									<li className="nav-item font-size-nav-item" key={list.id || i}>
										<NavLink
											className="nav-link text-nowrap font-weight-bold navigation-link-dashboard"
											to={list.link}
										>
											<span>
												<span className="icon">{list.icon}</span> {list.name}
											</span>
											<span className="show">{list.show}</span>
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="logout-dashboard text-danger" onClick={logout}>
						<i className="zmdi zmdi-power"></i> Logout
					</div>
				</div>

				<div className="dashboard-main"></div>
			</div>
		</Fragment>
	);
};

export default withRouter(DashboardSideNav);
