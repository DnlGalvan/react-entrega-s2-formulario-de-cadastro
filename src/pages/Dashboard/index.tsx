import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import MainDashboard from "../../components/MainDashboard";
import Modal from "../../components/Modal";
import { useContext } from "react";
import { UserContext } from "../../constexts/UserContext";
import { TechContext } from "../../constexts/TechContext";
import { Div } from "./styles";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { modal, modalEdit } = useContext(TechContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {!user && <Navigate to={"/login"} />}
      <Div>
        {modal && <Modal />}
        {modalEdit && <Modal />}
        <NavBar />
        <Header />
        <MainDashboard />
      </Div>
    </motion.div>
  );
};
export default Dashboard;