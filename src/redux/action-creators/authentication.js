import axios from 'axios';
import {
  REGISTER,
  FAILED_TO_REGISTER,
  GET_USERS,
  FAILED_TO_GET_USERS
} from '../action-types/authentication';

// login user

export const register = (token,
  first_name,
  surname,
  tel,
  email,
  passport_number,
  occupation,
  address,
  marriage,
  kin_name,
  origin_area,
  arrival_date,
  photo,
  proof_of_residence,
  kin_relationship,
  userId,
  comments,
  gender,
  kin_contact,
  city) => async (dispatch) => {
    const URL = `${process.env.REACT_APP_API}/user/register`;
  try {
    const users = await axios.post(URL, {
      token,
      first_name,
      surname,
      tel,
      email,
      passport_number,
      occupation,
      address,
      marriage,
      kin_name,
      origin_area,
      arrival_date,
      photo,
      proof_of_residence,
      kin_relationship,
      userId,
      comments,
      gender,
      kin_contact,
      city
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }

    });
    const {
      data
    } = users;
    return dispatch({
      type: REGISTER,
      payload: data,
    });
  } catch (error) {
    const {
      response
    } = error;
    return dispatch({
      type: FAILED_TO_REGISTER,
      payload: response,
    });
  }
};



// get users
export const getUsers = (token) => async (dispatch) => {
  const URL = `${process.env.REACT_APP_API}/user`;
  try {
    const pages = await axios.get(
      URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const {
      data
    } = pages;
    return dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (error) {
    const {
      response
    } = error;
    return dispatch({
      type: FAILED_TO_GET_USERS,
      payload: response,
    });
  }
};