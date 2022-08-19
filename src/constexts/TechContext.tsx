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
    
    await api
      .post<IUserTechs>("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Tecnologia adicionada com sucesso", {
          theme: "colored",
        });
        setModal(false);
      })
      .catch((err: AxiosError<IUserError>) => {
        console.log(err);
        toast.error(err.response?.data.message, {
          theme: "colored",
        });
      });
  };

  const deleteTech = async (techId: string) => {
  
    await api
      .delete<IUserTechs>(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Tecnologia excluída com sucesso", {
          theme: "colored",
        });
        setModalEdit(false);
      })
      .catch((err: AxiosError<IUserError>) => {
        console.log(err);
        toast.error(err.response?.data.message, {
          theme: "colored",
        });
      });
  };

  const editTech = async (data: IUserTechs) => {

    await api
      .put<IUserTechs>(`/users/techs/${techId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res: AxiosResponse) => {
        toast.success("Tecnologia excluída com sucesso", {
          theme: "colored",
        });
        setModalEdit(false);
      })
      .catch((err: AxiosError<IUserError>) => {
        console.log(err);
        toast.error(err.response?.data.message, {
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