import { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from 'framer-motion'
import FormLogin from "../../components/FormLogin";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userToken = localStorage.getItem("userToken");

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{ duration: 1}}
    >
      {isLoggedIn || userToken ? (
        <Navigate to={"/dashboard"} />
      ) : (
        <FormLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </motion.div>
  );
};
export default Login;