import { useSelector } from "react-redux";
import HomePage from "../pages/HomePage";
import Admin from "../pages/AdminPage";


export default function AdminRoute({children}){
    const { auth, token, role, userId, userName } = useSelector((state) => state);

    if(role !== "admin"){
        return <HomePage />;
    }

    return <Admin />;
}