import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingSpinner from "../components/Loading";
import { UserContext } from "../constexts/UserContext";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;