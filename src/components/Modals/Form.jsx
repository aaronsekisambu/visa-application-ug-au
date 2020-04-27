import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register } from '../../redux/action-creators/authentication';
import Select from 'react-select';
import { options, optionsGender, cities, userStatus } from '../../helpers/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function validate(
	firstName,
	surname,
	tel,
	email,
	passportNumber,
	occupation,
	address,
	status,
	nextOfKin,
	origin,
	yearOfArrival,
	profilePicture,
	proofOfResidence,
	relationship,
	comments,
	gender,
	contactNOK,
	city
) {
	// true means invalid, so our conditions got reversed
	return {
		firstName: firstName.length === 0,
		surname: surname.length === 0,
		tel: tel.length === 0,
		email: email.length === 0,
		passportNumber: passportNumber.length === 0,
		address: address.length === 0,
		status: status.length === 0,
		nextOfKin: nextOfKin.length === 0,
		origin: origin.length === 0,
		yearOfArrival: yearOfArrival.length === 0,
		profilePicture: profilePicture.length === 0,
		proofOfResidence: proofOfResidence.length === 0,
		relationship: relationship.length === 0,
		occupation: occupation.length === 0,
		comments: comments.length === 0,
		gender: gender.length === 0,
		contactNOK: contactNOK.length === 0,
		city: city.length === 0,
	};
}
class Form extends Component {
	state = {
		touched: {
			firstName: false,
			surname: false,
			tel: false,
			email: false,
			passportNumber: false,
			occupation: false,
			address: false,
			status: false,
			nextOfKin: false,
			origin: false,
			yearOfArrival: false,
			profilePicture: false,
			proofOfResidence: false,
			relationship: false,
			comments: false,
			gender: false,
			contactNOK: false,
			city: false,
		},
		firstName: '',
		surname: '',
		tel: '',
		email: '',
		passportNumber: '',
		occupation: '',
		address: '',
		married: false,
		status: '',
		nextOfKin: '',
		origin: '',
		yearOfArrival: '',
		profilePicture: '',
		proofOfResidence: '',
		relationship: '',
		comments: '',
		selectedOption: null,
		gender: '',
		contactNOK: '',
		city: '',
	};
	componentDidMount() {
		const token = localStorage.getItem('token');
		if (!token) {
			return this.props.history.push('/auth');
		}
		const user = JSON.parse(atob(token.split('.')[1]));
		if (user.isAdmin) {
			return this.props.history.push('/dashboard');
		}
	}

	onChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};
	handleBlur = (field) => (evt) => {
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		});
	};
	handleStatus = () => {
		const { married } = this.state;
		this.setState({ married: !this.state.married });
		// console.log(married)
		// married ? this.setState({status: "married"}) : this.setState({status: "single"})
	};
	handleChange = (value, action) => {
		this.setState({ [action.name]: value });
	};
	fileSelectorHandle = (e) => {
		this.setState({ profilePicture: e.target.files[0] }) || this.setState({ proofOfResidence: e.target.files[0] });
	};
	clearError = (e) => {
		window.location.reload();
	};
	showWidget = (e, selected) => {
		e.preventDefault();
		let widget = window.cloudinary.createUploadWidget(
			{
				cloudName: process.env.REACT_APP_CLOUD_API_NAME,
				uploadPreset: process.env.REACT_APP_CLOUD_API_UPLOAD_NAME,
			},
			(error, result) => {
				if (result.event === 'success') {
					return selected === 'profile'
						? this.setState({ profilePicture: result.info.secure_url })
						: selected === 'proof'
						? this.setState({ proofOfResidence: result.info.secure_url })
						: '';
				}
			}
		);
		widget.open();
	};
	submit = () => {
		const token = localStorage.getItem('token');
		const user = JSON.parse(atob(token.split('.')[1]));
		const { register } = this.props;
		const {
			firstName,
			surname,
			tel,
			email,
			passportNumber,
			occupation,
			address,
			status,
			nextOfKin,
			origin,
			yearOfArrival,
			profilePicture,
			proofOfResidence,
			relationship,
			comments,
			gender,
			contactNOK,
			city,
			selectedOption,
		} = this.state;
		register(
			token,
			firstName,
			surname,
			tel,
			email,
			passportNumber,
			occupation,
			address,
			status.value,
			nextOfKin,
			origin,
			yearOfArrival,
			profilePicture,
			proofOfResidence,
			relationship.value,
			user.id,
			comments,
			gender.value,
			contactNOK,
			city.value
		);
	};
	render() {
		const {
			firstName,
			surname,
			tel,
			email,
			passportNumber,
			occupation,
			address,
			status,
			state,
			nextOfKin,
			origin,
			yearOfArrival,
			profilePicture,
			proofOfResidence,
			relationship,
			comments,
			selectedOption,
			gender,
			contactNOK,
			city,
		} = this.state;
		const { form_errors } = this.props;
		const errors = validate(
			firstName,
			surname,
			tel,
			email,
			passportNumber,
			occupation,
			address,
			status,
			nextOfKin,
			origin,
			yearOfArrival,
			profilePicture,
			proofOfResidence,
			relationship,
			comments,
			gender,
			contactNOK,
			city
		);
		const isDisabled = Object.keys(errors).some((x) => errors[x]);

		const shouldMarkError = (field) => {
			const hasError = errors[field];
			const shouldShow = this.state.touched[field];

			return hasError ? shouldShow : false;
		};
		if (form_errors) {
			if (form_errors.data.error) {
				toast.error(form_errors.data.error, {
					position: toast.POSITION.TOP_LEFT,
				});
			}
		}
		return (
			<Fragment>
				<ToastContainer />
				{this.props.registered ? (
					<div className="pb-4 p-3 pl-5 pr-5 my-3 text-center rounded shadow-sm border">
						<h4 className="text-secondary" style={{ fontSize: '13px' }}>
							Successfully<span className="text-success"> registered </span> below is your registration.
							<br /> <span className="text-success">Keep it on you all the time</span>
						</h4>
						<div
							className="bg-warning"
							style={{ fontSize: '13px', fontWeight: 'bolder' }}
							// onClick={clearError}
						>
							{this.props.registered.code}
						</div>
						<br />
						<button
							className="btn btn-outline-success"
							style={{ fontSize: '13px', fontWeight: 'bolder' }}
							onClick={this.clearError}
						>
							Go back
						</button>
					</div>
				) : (
					<div className="tab-content" id="myTabContent">
						<div
							className="tab-pane fade show active mt-4"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						>
							<h3 className="register-heading">Fill form</h3>
							<div className="row register-form pt-4">
								<div className="col-md-6">
									<div
										className={
											shouldMarkError('firstName')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="text"
											className="form-control"
											placeholder="First Name *"
											name="firstName"
											onChange={this.onChange}
											onBlur={this.handleBlur('firstName')}
										/>
									</div>
									<div
										className={
											shouldMarkError('surname')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="text"
											className="form-control"
											placeholder="Surname *"
											name="surname"
											onChange={this.onChange}
											onBlur={this.handleBlur('surname')}
										/>
									</div>
									<div
										className={
											shouldMarkError('tel')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="number"
											className="form-control"
											placeholder="Tel *"
											name="tel"
											onChange={this.onChange}
											onBlur={this.handleBlur('number')}
										/>
									</div>
									<div
										className={
											shouldMarkError('email')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="email"
											className="form-control"
											placeholder="Email *"
											name="email"
											onChange={this.onChange}
											onBlur={this.handleBlur('email')}
										/>
									</div>
									<div
										className={
											shouldMarkError('city')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<Select
											type="text"
											placeholder="City *"
											name="city"
											options={cities}
											onChange={this.handleChange}
											onBlur={this.handleBlur('city')}
										/>
									</div>
									<div
										className={
											shouldMarkError('passportNumber')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="text"
											className="form-control"
											placeholder="Passport Number *"
											name="passportNumber"
											onChange={this.onChange}
											onBlur={this.handleBlur('passportNumber')}
										/>
									</div>
									<div
										className={
											shouldMarkError('occupation')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="text"
											className="form-control"
											placeholder="Occupation in Australia *"
											name="occupation"
											onChange={this.onChange}
											onBlur={this.handleBlur('occupation')}
										/>
									</div>
									<div
										className={
											shouldMarkError('address')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="address"
											className="form-control"
											placeholder="Address *"
											name="address"
											onChange={this.onChange}
											onBlur={this.handleBlur('address')}
										/>
									</div>
									<div
										className={
											shouldMarkError('gender')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<Select
											type="text"
											placeholder="Gender *"
											name="gender"
											options={optionsGender}
											onChange={this.handleChange}
											onBlur={this.handleBlur('gender')}
										/>
									</div>
									<div className="form-group">
										<Select
											type="text"
											placeholder="Select Status *"
											name="status"
											options={userStatus}
											onChange={this.handleChange}
											onBlur={this.handleBlur('status')}
										/>
									</div>
									<div
										className={
											shouldMarkError('nextOfKin')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="text"
											className="form-control"
											placeholder="Name of Next of Kin in UG *"
											name="nextOfKin"
											onChange={this.onChange}
											onBlur={this.handleBlur('nextOfKin')}
										/>
									</div>
									<div
										className={
											shouldMarkError('relationship')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<Select
											type="text"
											placeholder="Relation with next of Kin *"
											name="relationship"
											options={options}
											onChange={this.handleChange}
											onBlur={this.handleBlur('relationship')}
										/>
									</div>
									<div
										className={
											shouldMarkError('contactNOK')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="number"
											className="form-control"
											placeholder="Next of Kin Contact *"
											name="contactNOK"
											onChange={this.onChange}
											onBlur={this.handleBlur('contactNOK')}
										/>
									</div>
									<div
										className={
											shouldMarkError('origin')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="text"
											className="form-control"
											placeholder="Area of origin from UG *"
											name="origin"
											onChange={this.onChange}
											onBlur={this.handleBlur('origin')}
										/>
									</div>
									<div
										className={
											shouldMarkError('yearOfArrival')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<input
											type="year"
											className="form-control"
											placeholder="Year of arrival abroad *"
											name="yearOfArrival"
											onChange={this.onChange}
											onBlur={this.handleBlur('yearOfArrival')}
										/>
									</div>
									<div
										className={
											shouldMarkError('comments')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<textarea
											type="textbox"
											className="form-control"
											placeholder="Comments *"
											name="comments"
											onChange={this.onChange}
											onBlur={this.handleBlur('comments')}
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div
										className={
											shouldMarkError('uploadProfilePicture')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<div
											className="border shadow rounded mb-3"
											style={{
												width: '100px',
												height: '100px',
												objectFit: 'cover',
												display: profilePicture ? 'block' : 'none',
											}}
										>
											<img
												src={profilePicture}
												alt=""
												style={{ width: '100px', height: '100px', objectFit: 'cover' }}
											/>
										</div>
										<button
											className={profilePicture ? 'btn btn-secondary' : 'btn btn-primary'}
											onClick={(e) => this.showWidget(e, 'profile')}
											disabled={profilePicture}
										>
											Upload passport photo
										</button>
									</div>
									<div
										className={
											shouldMarkError('proofOfResidence')
												? 'form-group border border-danger rounded'
												: 'form-group'
										}
									>
										<div
											className="border shadow rounded mb-3"
											style={{
												width: '100px',
												height: '100px',
												objectFit: 'cover',
												display: proofOfResidence ? 'block' : 'none',
											}}
										>
											<img
												src={proofOfResidence}
												alt=""
												style={{ width: '100px', height: '100px', objectFit: 'cover' }}
											/>
										</div>
										<button
											className={proofOfResidence ? 'btn btn-secondary' : 'btn btn-primary'}
											onClick={(e) => this.showWidget(e, 'proof')}
											disabled={proofOfResidence}
										>
											Upload proof of residence
										</button>
									</div>
									<button
										type="submit"
										className={
											isDisabled ? 'btn btn-secondary disabled ' : 'btn btn-success Register'
										}
										disabled={isDisabled}
										onClick={this.submit}
									>
										Register
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	registered: state.authentication.register,
	form_errors: state.authentication.error,
});
export default withRouter(connect(mapStateToProps, { register })(Form));
