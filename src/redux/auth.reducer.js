import { ADD_TOKEN, DELETE_TOKEN } from "./auth.types";

const initialState = {
    token: null,
    auth: false,
    userId: null,
    userName: null,
    role: null
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TOKEN: {
            return {
                ...state, token: payload.token, auth: true,
                userId: payload.userId,
                userName: payload.userName, role: payload.role
            }
        }

        case DELETE_TOKEN: {
            return {
                ...state, token: null, auth: null,
                userId: null,
                userName: null, role: null
            }
        }

        default:
            return state
    }
}