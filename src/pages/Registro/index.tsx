import FormRegister from "../../components/FormRegister"
import { motion } from 'framer-motion'

const Registro = () => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 1}}
        >
            <FormRegister />
        </motion.div>
    )
}
export default Registro