import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/action-creators/authentication';
import Loader from 'react-loader';
import Switch from 'react-switch';

const Users = (props) => {
	const { getUsers, users } = props;
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			return null;
		}
		getUsers(token);
	}, []);
	const handleSwitch = () => {
		setIsAdmin(!isAdmin);
	};
	return (
		<Fragment>
			<div className="my-3 p-3 bg-white rounded shadow-sm">
				<h6 className="border-bottom border-gray pb-2 mb-0">Available users</h6>
				{users ? (
					users.map((user, i) => (
						<div className="media text-muted pt-3 user-only" key={i}>
							<img
								src={
									user.image
										? user.image
										: 'https://ya-webdesign.com/transparent250_/avatar-png-1.png'
								}
								alt="profile-image"
								style={{
									width: '30px',
									height: '30px',
									borderRadius: '300px',
									margin: '0 0.5em 0 0',
								}}
							/>
							<div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
								<div className="d-flex justify-content-between align-items-center w-100">
									<strong className="text-gray-dark">{user.name}</strong>
									<a href="#">
										{user.IsAdmin ? (
											<span className="badge badge-primary">Admin</span>
										) : user.RegistrationDetails.code ? (
											<span className="badge badge-success">Registered</span>
										) : (
											<span className="badge badge-danger">Not Registered</span>
										)}
									</a>
								</div>
								<span className="d-block">
									{user.IsAdmin ? (
										<span className="badge badge-primary">Admin</span>
									) : (
										<span className="badge badge-info">User</span>
									)}
								</span>
							</div>
							{user.superAdmin ? <div className="ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
								<label>
									<Switch onChange={handleSwitch} checked={isAdmin} />
								</label>
							</div>: ""}
						</div>
					))
				) : (
					<Loader />
				)}

				<small class="d-block text-right mt-3">
					<a href="#">{users ? users.length : 0} users</a>
				</small>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	users: state.authentication.users,
});
export default connect(mapStateToProps, { getUsers })(Users);
