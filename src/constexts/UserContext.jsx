import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("userToken");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (err) {
          console.error(err);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const onSubmitLogin =  async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        localStorage.clear()
      });
  };

  const onSubmitRegister =  async (data) => {
    await api
      .post("/users", data)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <UserContext.Provider value={{ user, loading, modal, setModal, onSubmitLogin, onSubmitRegister }}>
      {children}
    </UserContext.Provider>
  );
};