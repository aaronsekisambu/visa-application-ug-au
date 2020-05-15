import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = (props) => {
	const { links, history } = props;

	const logout = (e) => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	const login =(e) => {
		e.preventDefault();
		window.location.assign(`${process.env.REACT_APP_API}/auth/google/login`);
	}

	return (
		<Fragment>
			<div className="footer">
				<div className="container-fluid">
					<div className="row justify-content-between">
						<div className="government">
							<span>The Government</span>
							<ul>
								{links.government.map((gov) => (
									<li key={gov.id}>
										<a href={gov.link}>
											{gov.name}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="government">
							<span>Tourism in Uganda</span>
							<ul>
								{links.tourismInUganda.map((gov) => (
									<li key={gov.id}>
										<a href={gov.link}>
											{gov.name}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="government">
							<span>Quick Links</span>
							<ul>
								{links.quickLinks.map((gov) => (
									<li key={gov.id}>
										<a href={gov.link}>
											{gov.name}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="government">
							<span>Related Links</span>
							<ul>
								{links.relatedLinks.map((gov) => (
									<li key={gov.id}>
										<a href={gov.link}>
											{gov.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div
					className="end-footer pl-2 pr-2"
					style={{
						display: 'flex',
						flexWrap: 'no-wrap',
						justifyContent: 'space-between',
					}}
				>
					<div className="footer-coat">
						<img
							src={`https://upload.wikimedia.org/wikipedia/commons/7/7c/Coat_of_arms_of_Uganda.svg`}
							alt=""
						/>
					</div>
					<div className="text-end">
						The Republic of Uganda - Embassy of the Republic of Uganda, Australia, Canberra{' '}
					</div>
					{localStorage.getItem('token') ? (
						<button className="btn btn-outline-light p-0 pl-2 pr-2" onClick={logout}>Logout</button>
					) : (
						<button className="btn btn-outline-light p-0 pl-2 pr-2" onClick={login}>Login</button>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default withRouter(Footer);
