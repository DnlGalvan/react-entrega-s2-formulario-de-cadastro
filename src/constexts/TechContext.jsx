import { createContext } from "react";
import api from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("userToken");

  const addTech = async (data) => {
    await api
      .post("/users/techs", data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteTech = async (techId) => {
    await api
      .post(`/users/techs/${techId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <TechContext.Provider value={{ addTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};
