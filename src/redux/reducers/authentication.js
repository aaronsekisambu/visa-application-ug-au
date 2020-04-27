import {
  REGISTER,
  FAILED_TO_REGISTER,
  GET_USERS,
  FAILED_TO_GET_USERS
} from "../action-types/authentication";

export default (state = {}, {
  type,
  payload
}) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        register: payload
      };
    case FAILED_TO_REGISTER:
      return {
        ...state,
        error: payload
      };
    case GET_USERS:
      return {
        ...state,
        users: payload
      };
    case FAILED_TO_GET_USERS:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};