import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { Input } from "../input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "./style";


export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm<ILoginForm>();

  const submitLogin: SubmitHandler<ILoginForm> = (data) => {
    reset()
    userLogin(data)
  }

  return (
    < Form onSubmit={handleSubmit(submitLogin)} >
      <Input
        label="Email"
        type="email"
        placeholder="Digite seu usuário aqui"
        register={register("email")}
      />
      <Input
        label="Senha"
        type="password"
        register={register("password")}
        placeholder="Digite seu email aqui"
      />
      <button type="submit">Acessar</button>
    </Form>
  );
};
