import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  const user = localStorage.getItem('user')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {user ? <Navigate to={"/dashboard"} /> : <FormLogin />}
    </motion.div>
  );
};
export default Login;