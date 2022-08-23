import { createContext, useState, ReactNode, Dispatch } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import api from "../services/api";
import { IUserError, IUserTechs } from "./UserContext";

interface ITechsProviderProps {
  children: ReactNode
}

interface ITechsProviderData {
  modal: boolean
  setModal: Dispatch<React.SetStateAction<boolean>>
  modalEdit: boolean
  setModalEdit: Dispatch<React.SetStateAction<boolean>>
  techId: string
  setTechId: Dispatch<React.SetStateAction<string>>
  techTitle: string
  setTechTitle: Dispatch<React.SetStateAction<string>>
  techStatus: string
  setTechStatus: Dispatch<React.SetStateAction<string>>
  addTech: (data: IUserTechs) => void
  deleteTech: (techId: string) => void
  editTech: (data: IUserTechs) => void
}


export const TechContext = createContext<ITechsProviderData>({} as ITechsProviderData);

export const TechProvider = ({ children }: ITechsProviderProps) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [techId, setTechId] = useState("");
  const [techTitle, setTechTitle] = useState("");
  const [techStatus, setTechStatus] = useState("");
  const token = localStorage.getItem("userToken");

  const addTech = async (data: IUserTechs) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await api
    .post<IUserTechs>("/users/techs", data)
      .then((res) => {
        toast.success("Tecnologia adicionada com sucesso", {
          theme: "colored",
        });
        setModal(false);
      })
      .catch((error: AxiosError<IUserError>) => {
        console.log(error);
        toast.error("Tecnologia já cadastrada, você pode apenas editá-la!", {
          theme: "colored",
        });
      });
  };

  const deleteTech = async (techId: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await api
      .delete<IUserTechs>(`/users/techs/${techId}`)
      .then((res) => {
        toast.success("Tecnologia excluída com sucesso", {
          theme: "colored",
        });
        setModalEdit(false);
      })
      .catch((error: AxiosError<IUserError>) => {
        console.log(error);
        toast.error("Algo deu errado ao excluir a tecnologia!", {
          theme: "colored",
        });
      });
  };

  const editTech = async (data: IUserTechs) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await api
      .put<IUserTechs>(`/users/techs/${techId}`, data)
      .then((res: AxiosResponse) => {
        toast.success("Tecnologia atualizada com sucesso", {
          theme: "colored",
        });
        setModalEdit(false);
      })
      .catch((error: AxiosError<IUserError>) => {
        console.log(error);
        toast.error("Algo deu errado ao atualizar a tecnologia!", {
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