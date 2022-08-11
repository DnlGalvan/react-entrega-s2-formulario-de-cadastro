import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("userToken");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [user]);

  const onSubmitLogin =  async (data) => {
    await api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user)
        toast.success(`Bem vindo, ${res.data.user.name}`)
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        toast.error(error.res.data.message);
        localStorage.clear()
      });
  };

  const onSubmitRegister =  async (data) => {
    await api
      .post("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <UserContext.Provider value={{ user, loading, onSubmitLogin, onSubmitRegister }}>
      {children}
    </UserContext.Provider>
  );
};