import { ADD_TOKEN, DELETE_TOKEN } from "./auth.types"

export const Login = (token) => (dispatch) => {
    dispatch({type: ADD_TOKEN, payload: token});
};

export const Logout = () => (dispatch) => {
    dispatch({type: DELETE_TOKEN});
};