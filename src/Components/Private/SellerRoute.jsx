import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loding from "../Loding";
import PropTypes from 'prop-types';
import useUserData from "../../hooks/useUserData";


export default function SellerRoute({ children }) {
    const { user, loding } = useAuth();
    const location = useLocation();
    const userData = useUserData();
    if (loding|| !userData.role) {
        return <Loding />
    }
    if (user && userData.role === "seller") {
        return children
    } else {

        return <Navigate to="/" state={{ from: location }} replace />
    }
}
SellerRoute.propTypes = {
    children: PropTypes.node.isRequired,
};