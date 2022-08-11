import { Main, Container, Title, Form, DivTitle, ButtonBack  } from "./styles"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../constexts/UserContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from "react"

const FormRegister = () => {
    const navigate = useNavigate()
    const { onSubmitRegister } = useContext(UserContext)
    
    const formSchema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Ao menos 1 número, 1 letra minúscula, 1 letra maiúscula e 1 caracter especial (#?!@$ %^&*-)"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Confirmação deve ser igual a senha"),
        bio: yup.string().required("Bio é obrigatório"),
        contact: yup.string().required("Contato é obrigatório"),
        course_module: yup.string().required("Módulo é obrigatório")

    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    return(
        <Main>
            <Container>
                <DivTitle>
                    <Title>Kenzie Hub</Title>
                    <ButtonBack onClick={() => navigate('/login')}>Voltar</ButtonBack>
                </DivTitle>
                <Form onSubmit={handleSubmit(onSubmitRegister)}>
                    <h3 className="form-title">Crie sua conta</h3>
                    <p className="form-info">Rápido e grátis, vamos nessa</p>
                    <label className="form-label" htmlFor="name">Nome</label>
                    <input className="form-input" type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}/>
                    <span className="form-error">{errors.name?.message}</span>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
                    <span className="form-error">{errors.email?.message}</span>
                    <label className="form-label" htmlFor="password">Senha</label>
                    <input className="form-input" type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                    <span className="form-error">{errors.password?.message}</span>
                    <label className="form-label" htmlFor="confirm-password">Confirmar senha</label>
                    <input className="form-input" type="password" id="confirm-password" placeholder="Digite aqui sua senha" {...register("password")}/>
                    <span className="form-error">{errors.confirmPassword?.message}</span>
                    <label className="form-label" htmlFor="bio">Bio</label>
                    <input className="form-input" type="text" id="bio" placeholder="Fale sobre você" {...register("bio")}/>
                    <span className="form-error">{errors.bio?.message}</span>
                    <label className="form-label" htmlFor="contact">Contato</label>
                    <input className="form-input" type="text" id="contact" placeholder="Opção de contato" {...register("contact")}/>
                    <span className="form-error">{errors.contact?.message}</span>
                    <label className="form-label" htmlFor="course_module">Selecionar módulo</label>
                    <select className="form-input" type="text" id="course_module" placeholder="Digite aqui seu nome" {...register("course_module")}>
                        <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro módulo</option>
                        <option value="Segundo Módulo (Frontend Avaçado)">Segundo módulo</option>
                        <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro módulo</option>
                        <option value="Quarto Módulo (Backend Avançado)">Quarto módulo</option>
                    </select>
                    <span className="form-error">{errors.course_module?.message}</span>
                    <button className="form-button" type="submit" >Cadastrar</button>
                    <ToastContainer />
                </Form>
            </Container>
        </Main>
    )
}
export default FormRegister