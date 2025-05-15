import { Navigate } from "react-router-dom";

const PublicRoute = ({ user, children }) => {
  return !user ? children : <Navigate to={"/"} />;
};
export default PublicRoute;
