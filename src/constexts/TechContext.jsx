import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [techId, setTechId] = useState("");
  const [techTitle, setTechTitle] = useState("");
  const [techStatus, setTechStatus] = useState("");

  const addTech = async (data) => {
    const token = localStorage.getItem("userToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .post("/users/techs", data)
      .then((res) => {
        toast.success("Tecnologia adicionada com sucesso", {
          theme: "colored",
        });
        setModal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          theme: "colored",
        });
      });
  };

  const deleteTech = async (techId) => {
    const token = localStorage.getItem("userToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .delete(`/users/techs/${techId}`)
      .then((res) => {
        toast.success("Tecnologia excluída com sucesso", {
          theme: "colored",
        });
        setModalEdit(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          theme: "colored",
        });
      });
  };

  const editTech = async (data) => {
    const token = localStorage.getItem("userToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .put(`/users/techs/${techId}`, data)
      .then((res) => {
        toast.success("Tecnologia excluída com sucesso", {
          theme: "colored",
        });
        setModalEdit(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          theme: "colored",
        });
      });
  };

  return (
    <TechContext.Provider
      value={{
        addTech,
        deleteTech,
        editTech,
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        setTechId,
        techId,
        techTitle,
        setTechTitle,
        techStatus,
        setTechStatus,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};