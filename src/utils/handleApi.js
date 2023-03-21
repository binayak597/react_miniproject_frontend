import axios from "axios";
import { Login } from "../redux/auth.actions";



const baseUrl = "https://mini-project-backend-53b7.onrender.com";

async function registerUser(user) {

    await axios
    .post(`${baseUrl}/user/register`, user)
        .then((res) => {
            alert(res.data.message);
            // setNewUser({});
            // setRole("");
            // setCPassword("");
        })
        .catch((err) => console.log(err));
}


async function loginUser(login, dispatch){ 

    await axios
    .post(`${baseUrl}/user/login`, login)
    .then((res) => {
        dispatch(Login({
            token: res.data.token,
            userId: res.data.userDetails.userId,
            userName: res.data.userDetails.userName,
            role: res.data.userDetails.role
        }));

        })
    .catch((err) => console.log(err));
}

async function updateUser(userId, role, obj){
    await axios(`${baseUrl}/user/${userId}`, {
        method: "patch",
        data: obj,
        header:{
            role: role
        }
    })
    .then((res) => alert(res.data.message))
    .catch((err) => console.log(err));
}

async function deleteUser(userId, role){
    await axios(`${baseUrl}/user/${userId}`, {
        method: "delete",
        header:{
            role: role
        }
    })
    .then((res) => alert(res.data.message))
    .catch((err) => console.log(err));
}

export { registerUser, loginUser, updateUser, deleteUser };