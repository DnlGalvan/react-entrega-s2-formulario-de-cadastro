import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import api from "../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserData {
  id?: string
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
  techs: IUserTechs[]
}

export interface IUserTechs {
  id: string
  status: string
  title: string
}

interface IUserDataResponse {
  user: IUserData
  token: string
}

export interface IUserError {
  error: string
  message: string
}

interface IUserProviderData {
  user: IUserData
  loading: boolean
  onSubmitLogin: (data: IUserData) => void
  onSubmitRegister: (data: IUserData) => void
}

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("userToken");
      
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
        try {
          const { data } = await api.get<IUserData>("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [user]);

  const onSubmitLogin = async (data: IUserData) => {
    await api
      .post<IUserDataResponse>("/sessions", data)
      .then((res) => {
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        toast.success(`Bem vindo, ${res.data.user.name}`, {
          theme: "colored",
        });
        navigate("/dashboard", { replace: true });
      })
      .catch((error: AxiosError<IUserError>) => {
        toast.error(error.response?.data.message, {
          theme: "colored",
        });
        localStorage.clear();
      });
  };

  const onSubmitRegister = async (data: IUserData) => {
    await api
      .post<IUserDataResponse>("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!", {
          theme: "colored",
        });
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          theme: "colored",
        });
      });
  };

  return (
    <UserContext.Provider
      value={{ user, loading, onSubmitLogin, onSubmitRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};