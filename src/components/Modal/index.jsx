import { useContext } from "react";
import { TechContext } from "../../constexts/TechContext";
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import 'react-toastify/dist/ReactToastify.css'
import { ButtonClose, Container, DivTitle } from "./styles";

const Modal = () => {
    const { addTech, setModal } = useContext(TechContext)

    const formSchema = yup.object().shape({
        title: yup.string().required("Título é obrigatório"),
        status: yup.string().required("Status é obrigatório"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    return (
            <Container>
                <DivTitle>
                    <h3>Cadastrar Tecnologia</h3>
                    <ButtonClose onClick={() => setModal(false)}>X</ButtonClose>
                </DivTitle>
                <form onSubmit={handleSubmit(addTech)}>
                <label htmlFor="title">Título</label>
                <input type="text" id="title" placeholder="Título tecnologia" {...register("title")}/>
                <span>{errors.title?.message}</span>
                <label htmlFor="status">Selecionar status</label>
                <select type="text" id="status" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <span>{errors.status?.message}</span>
                <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </Container>
    )
}
export default Modal;