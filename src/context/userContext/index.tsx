import { createContext } from "react";
import { api } from "../../service";
import { useNavigate } from "react-router-dom";
import { IRegisterUser } from "../../components/form/register";
import { ILoginForm } from "../../components/form/login";

interface IDefaultProps {
  children: React.ReactNode;
}

interface IUserContext {
    userRegister: (data: IRegisterUser) => Promise<void>,
    userLogin: (data: ILoginForm) => Promise<void>
    
}

export interface IRegisterResponse {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProps) => {
  const navigate = useNavigate();

  const userRegister = async (data: IRegisterUser) => {
    try {
      await api.post("/register", data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (data : ILoginForm)=> {
    try {
        await api.post("/login", data)
        navigate("/dashboard")
        
    } catch (error) {
       console.log(error) 
    }
  }

  return (
    <UserContext.Provider value={{ userRegister, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
