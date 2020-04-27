import React, { Fragment, useState } from 'react';
import Form from '../Modals/Form';
import { withRouter } from 'react-router-dom';

const Modal = (props) => {
	const { isModalOpen, token, history, openModal } = props;
	// const [hideShow, setHideShow] = useState(false);

	// const showHide = (e) => {
	// 	e.preventDefault();
	// 	setHideShow(!dropdown);
	// };
	const login = (e) => {
		e.preventDefault();
		history.push('/auth');
	};
	return (
		<Fragment>
			<div
				className="modal fade"
				id="exampleModalScrollable"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalScrollableTitle"
				aria-hidden="true"
				style={{
					display: isModalOpen ? 'block' : 'none',
					opacity: isModalOpen ? 1 : 0,
					background: '#000000d1',
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable pt-5" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalScrollableTitle">
								Visa Application form
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={openModal}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{token ? (
								<Form />
							) : (
								<div className="not-logged-in">
									<p>
										You cannot access this form before you login or create an account with us.
										Please click <span onClick={login}>here</span> or on the button below to login or
										create an account
									</p>
								</div>
							)}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={openModal}
							>
								Close
							</button>
							{token ? (
								<button type="button" className="btn btn-primary">
									Save changes
								</button>
							) : (
								<button type="button" className="btn btn-primary" onClick={login}>
									Login/Register
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default withRouter(Modal);
