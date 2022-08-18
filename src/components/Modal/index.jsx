import { useContext } from "react";
import { TechContext } from "../../constexts/TechContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { ButtonClose, Container, DivTitle, Form } from "./styles";

const Modal = () => {
  const {
    addTech,
    deleteTech,
    editTech,
    modal,
    setModal,
    modalEdit,
    setModalEdit,
    techId,
    techTitle,
    techStatus,
  } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().trim().required("Título é obrigatório"),
    status: yup.string().trim().required("Status é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      {modal && (
        <Container>
          <DivTitle>
            <h3>Cadastrar Tecnologia</h3>
            <ButtonClose onClick={() => setModal(false)}>X</ButtonClose>
          </DivTitle>
          <Form onSubmit={handleSubmit(addTech)}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              placeholder="Título tecnologia"
              {...register("title")}
            />
            <span>{errors.title?.message}</span>
            <label htmlFor="status">Selecionar status</label>
            <select type="text" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <span>{errors.status?.message}</span>
            <button type="submit">Cadastrar Tecnologia</button>
          </Form>
        </Container>
      )}
      {!modal && modalEdit && (
        <Container>
          <DivTitle>
            <h3>Tecnologia Detalhes</h3>
            <ButtonClose onClick={() => setModalEdit(false)}>X</ButtonClose>
          </DivTitle>
          <Form onSubmit={handleSubmit(editTech)}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={techTitle}
              {...register("title")}
            />
            <span>{errors.title?.message}</span>
            <label htmlFor="status">Selecionar status</label>
            <select
              type="text"
              id="status"
              defaultValue={techStatus}
              {...register("status")}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <span>{errors.status?.message}</span>
            <div>
              <button type="submit">Salvar Tecnologia</button>
              <button type="button" onClick={() => deleteTech(techId)}>
                Excluir
              </button>
            </div>
          </Form>
        </Container>
      )}
    </>
  );
};
export default Modal;
