import axios from 'axios';
import {
	UPLOAD_PAGES,
	FAILED_TO_UPLOAD_PAGE,
	GET_ALL_PAGES,
	FAILED_TO_GET_ALL_PAGES,
	GET_A_PAGE,
	FAILED_TO_GET_A_PAGE,
} from '../action-types/pages';

// upload a page
export const createPage = (token, title, body, type) => async (dispatch) => {
	const URL = `${process.env.REACT_APP_API}/pages`;
	try {
		const pages = await axios.post(
			URL, {
				title,
				body,
				type,
			}, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const {
			data
		} = pages;
		return dispatch({
			type: UPLOAD_PAGES,
			payload: data,
		});
	} catch (error) {
		const {
			response
		} = error;
		return dispatch({
			type: FAILED_TO_UPLOAD_PAGE,
			payload: response,
		});
	}
};

// get page
export const getPages = (token) => async (dispatch) => {
	const URL = `${process.env.REACT_APP_API}/pages`;
	try {
		const pages = await axios.get(URL, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const {
			data
		} = pages;
		return dispatch({
			type: GET_ALL_PAGES,
			payload: data,
		});
	} catch (error) {
		const {
			response
		} = error;
		return dispatch({
			type: FAILED_TO_GET_ALL_PAGES,
			payload: response,
		});
	}
};

// get page
export const getPage = (type) => async (dispatch) => {
	const URL = `${process.env.REACT_APP_API}/pages/${type}`;
	try {
		const pages = await axios.get(
			URL,
			// {
			// headers: {
			// 	Authorization: `Bearer ${token}`,
			// },
			// }	
		);
		const {
			data
		} = pages;
		return dispatch({
			type: GET_A_PAGE,
			payload: data,
		});
	} catch (error) {
		const {
			response
		} = error;
		return dispatch({
			type: FAILED_TO_GET_A_PAGE,
			payload: response,
		});
	}
};