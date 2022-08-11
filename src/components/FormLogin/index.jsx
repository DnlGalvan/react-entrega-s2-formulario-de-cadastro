import { Container, ContainerRegister, Form, Main, Title } from "./styles"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from "react"
import { UserContext } from "../../constexts/UserContext"


const FormLogin = () => {

    const { onSubmitLogin } = useContext(UserContext)
    
    const navigate = useNavigate()
    
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória")
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });
    
    return (
        <Main>
            <Container>
                <Title>Kenzie Hub</Title>
                <Form onSubmit={handleSubmit(onSubmitLogin)}>
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