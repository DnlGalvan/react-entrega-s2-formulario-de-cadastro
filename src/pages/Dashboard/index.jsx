import { motion } from 'framer-motion'
import { Navigate } from "react-router-dom"
import Header from "../../components/Header"
import NavBar from "../../components/NavBar"
import MainDashboard from "../../components/MainDashboard"
import { useContext } from 'react'
import { UserContext } from '../../constexts/UserContext'

const Dashboard = () => {
    const { user } = useContext(UserContext);
    
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 1}}
        >
            {!user && <Navigate to={"/login"} />}
            <NavBar />
            <Header />
            <MainDashboard />
        </motion.div>
    )
}
export default Dashboard