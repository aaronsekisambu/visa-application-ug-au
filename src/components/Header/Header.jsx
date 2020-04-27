import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const MyHeader = (props) => {
	const { token, userProfile, username, history, width } = props;
	const authenticate = (e) => {
		e.preventDefault();
		history.push('/auth');
	};
	return (
		<Fragment>
			<nav className="navbar sticky-top navbar-light bg-info header-top p-0 m-0" style={{display: width <= 700 ? "none" : "flex"}}>
				{/* <div className="header-flag"> */}
					{/* <img src={headerImg} alt="" /> */}
				{/* </div> */}
				{/* <div className="header-coat">
					<img src={`https://upload.wikimedia.org/wikipedia/commons/7/7c/Coat_of_arms_of_Uganda.svg`} alt="" />
				</div> */}
			</nav>
		</Fragment>
	);
};

export default withRouter(MyHeader);
