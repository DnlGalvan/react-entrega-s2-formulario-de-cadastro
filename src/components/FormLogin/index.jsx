import { Container, ContainerRegister, Form, Main, Title } from "./styles"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const FormLogin = ({ setIsLoggedIn }) => {
    const notify = (status, message) => {
        status === 'error' && toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    
    const navigate = useNavigate()
    
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória")
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });
    
    const onSubmit = (data) => {
        
        api.post('/sessions', data)
            .then(response => {
                localStorage.setItem('userToken', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                setIsLoggedIn(true)
                navigate("/dashboard", {replace: true})
            })
            .catch(err => {
                notify('error', err.response.data.message)
            })
    
    }
    
    
    return (
        <Main>
            <Container>
                <Title>Kenzie Hub</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="form-title">Login</h3>
                    <label className="form-label" htmlFor="email" >Email</label>
                    <input className="form-input" type="email" id="email" placeholder="Digite seu email"{...register("email")}/>
                    <span className="form-error">{errors.email?.message}</span>
                    <label className="form-label" htmlFor="password" >Senha</label>
                    <input className="form-input" type="password" id="password" placeholder="Digite sua senha"{...register("password")}/>
                    <span className="form-error">{errors.password?.message}</span>
                    <button className="form-button" type="submit">Entrar</button>
                    <ContainerRegister>
                        <span className="register-span">Ainda não possui uma conta?</span>
                        <button className="register-button" type="button" onClick={() => navigate("/registro")}>Cadastrar</button>
                    </ContainerRegister>
                </Form>
            </Container>
            <ToastContainer />
        </Main>
    )
}
export default FormLogin