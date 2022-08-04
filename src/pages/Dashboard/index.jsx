import { motion } from 'framer-motion'
import { Navigate } from "react-router-dom"
import Header from "../../components/Header"
import NavBar from "../../components/NavBar"
import MainDashboard from "../../components/MainDashboard"

const Dashboard = () => {
    const userToken = localStorage.getItem('userToken')
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 1}}
        >
            {!userToken && <Navigate to={"/login"} />}
            <NavBar />
            <Header user={user}/>
            <MainDashboard />
        </motion.div>
    )
}
export default Dashboard