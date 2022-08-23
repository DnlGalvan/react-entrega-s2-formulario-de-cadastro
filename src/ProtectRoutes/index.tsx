import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingSpinner from "../components/Loading";
import { UserContext } from "../constexts/UserContext";

const ProtectedRoutes = () => {
  const { loading } = useContext(UserContext);
  const user = window.localStorage.getItem("user")

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;