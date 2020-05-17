import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/action-creators/authentication';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'

const Users = (props) => {
	const { getUsers, users } = props;
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
		name: '',
		RegistrationDetails: {}
	})
		// Address: "d"
		// ArrivalDate: "2134"
		// City: "kampala"
		// Code: "CON-AUS-KAM-1609825"
		// Comment: ""
		// CreatedAt: "2020-05-14T23:38:38.743098Z"
		// DeletedAt: null
		// FirstName: "ffff"
		// Gender: "Female"
		// ID: "a4da3809-0971-4c63-90d7-61a946001e9f"
		// KinContact: "333333"
		// KinName: "ddd"
		// KinRelationship: "brother"
		// Marriage: "married"
		// OriginArea: "reacd"
		// PassportNumber: "213"
		// Photo: "https://res.cloudinary.com/dchunophk/image/upload/v1589499493/nkym7i1ytevjtwgss1e0.png"
		// ProofOfResidence: "https://res.cloudinary.com/dchunophk/image/upload/v1589499509/hwxrs4fhq1nk0gb5na5f.png"
		// Surname: "fff"
		// UpdatedAt: "2020-05-14T23:38:38.743098Z"
		// UserID: "190c56cd-4f88-44b0-ab29-01a683631544"

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			return null;
		}
		getUsers(token);
    }, [getUsers]);

    const handleClose = () => {
        setShow(false);
    }
    
    const handleShow = (userObj) => {
        setShow(true);
        setUser(userObj)
    }
    
    if (users === undefined) {
        return <Spinner animation="border" variant="success" style={{marginTop: '50px'}}/>
	}

	console.log(user);
	const { FirstName, Surname, Photo, Code, Gender, ProofOfResidence, Kin, Passport, Address, OriginArea, Relationship } = user.RegistrationDetails
	
	return (
		<Fragment>
            <Modal show={show} onHide={handleClose} size="xl">

                <Modal.Header closeButton>
                    <Modal.Title>{ FirstName } { Surname }</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table responsive="md" striped bordered hover style={{marginTop: '50px'}} size="sm">
                        <thead>
                            <tr>
								<th>Image</th>
								<th>Code</th>
								<th>Email</th>
								<th>Gender</th>
								<th>OriginArea</th>
								<th>Address</th>
								<th>Passport</th>
								<th>POR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        src={
                                            Photo
                                                ? Photo
                                                : 'https://ya-webdesign.com/transparent250_/avatar-png-1.png'
                                        }
                                        alt=""
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '300px',
                                            margin: '0 0.5em 0 0',
                                        }}
                                    />
							    </td>
                                <td>{Code}</td>
                                <td>{user.email}</td>
								<td>{Gender}</td>
                                <td>{OriginArea}</td>
                                <td>{Address}</td>
                                <td>{Passport}</td>
                                <td>
									<a href={ProofOfResidence}>Link</a>
								</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
            <Table striped responsive="xl" bordered hover style={{marginTop: '50px'}}>
                <thead>
                    <tr>
                        <th>Image</th>
						<th>Code</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                {users.map((user, i) => {
                    if (user.IsAdmin === false && user.RegistrationDetails.Code !== ""){
                         return (<tbody>
                            <tr key={i}>
                                <td>
                                    <img
                                        src={
                                            user.RegistrationDetails.Photo
                                                ? user.RegistrationDetails.Photo
                                                : 'https://ya-webdesign.com/transparent250_/avatar-png-1.png'
                                        }
                                        alt=""
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '300px',
                                            margin: '0 0.5em 0 0',
                                        }}
                                    />
							    </td>
								<td>{user.RegistrationDetails.Code}</td>
                                <td style={{textTransform: 'capitalize'}}>{user.name}</td>
                                <td>{user.email}</td>
                                <td><Button variant="success" block onClick={(e) => handleShow(user, e)}>View</Button></td>
                            </tr>
                        </tbody>) 
                    } else {
                        return ""
                    }
                })}
            </Table>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	users: state.authentication.users,
});
export default connect(mapStateToProps, { getUsers })(Users);
