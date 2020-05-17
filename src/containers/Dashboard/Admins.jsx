import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/action-creators/authentication';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'

const Admins = (props) => {
	const { getUsers, users } = props;
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
        name: ''
    });

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

	return (
		<Fragment>
            <Modal show={show} onHide={handleClose} size="xl">

                <Modal.Header closeButton>
                    <Modal.Title>{user.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table striped bordered hover style={{marginTop: '50px'}} size="sm">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>CreatedAt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        src={
                                            user.Image
                                                ? user.Image
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
                                <td>{user.ID}</td>
                                <td style={{textTransform: 'capitalize'}}>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.CreatedAt}</td>
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
            <Table striped bordered hover style={{marginTop: '50px'}} responsive="xl">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {users.map((user, i) => {
                    if (user.IsAdmin === true){
                         return (<tbody>
                            <tr key={i}>
                                <td>
                                    <img
                                        src={
                                            user.Image
                                                ? user.Image
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
                                <td>{user.name}</td>
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
export default connect(mapStateToProps, { getUsers })(Admins);