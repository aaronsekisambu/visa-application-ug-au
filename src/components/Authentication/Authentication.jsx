import React, { Fragment, useEffect } from 'react';
import logo from '../../assets/images/auUg.jpg';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/action-creators/authentication';

const Authentication = (props) => {
	const { userProfile, username, history } = props;

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			return history.push('/auth');
		}
		const user = JSON.parse(atob(token.split('.')[1]));
		user.isAdmin ? history.push('/dashboard-admins') : history.push('/register');
	}, []);

	const goBack = (e) => {
		e.preventDefault();
		history.push('/auth');
	};

	const googleSocialAuth = () => {
		window.location.assign(`${process.env.REACT_APP_API}/auth/google/login`);
	};
	return (
		<Fragment>
			<main id="main" className="site-main main">
				<section className="section mb-5">
					<div className="container">
						<div className="row ">
							<div className="container container--mini col-12 col-lg-4 col-sm-8 col-md-6 mt-5 border rounded shadow-sm p-5">
								<img className="img-fluid mx-auto d-block mb-5 logo-login" src={logo} alt="" />
								<form name="loginform mt-5" id="loginform" method="post">
									<p className="text-center pb-4" style={{ color: '#8c8c8c', fontSize: '12px' }}>
										<strong>Login</strong> or <strong>sign up</strong> using any of these methods
										below. Always remember to you the same method when login in to this system
									</p>
									<div className="form-group text-center">
										<div
											className="btn btn-success"
											style={{ padding: '.5em 2em .8em' }}
											onClick={googleSocialAuth}
										>
											<i className="zmdi zmdi-google" style={{ padding: '0 1em' }}></i>use Google
										</div>
									</div>
									<div className="text-center go-back">
										{' '}
										Don't want to register{' '}
										<span onClick={goBack}>
											{' '}
											<i className="zmdi zmdi-long-arrow-return"></i>Go Back
										</span>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({ user: state.authentication.login });
export default connect(mapStateToProps, {})(Authentication);
