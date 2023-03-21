import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage";

export default function PrivateRoute({children}){
    const { auth, token, role, userId, userName } = useSelector((state) => state);

    if(!auth){
        return <LoginPage />;
    }
    return children;
}