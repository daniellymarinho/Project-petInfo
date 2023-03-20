import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterResponse, UserContext } from "../../../context/userContext";
import { useContext } from "react";
import { Input } from "../input";
import { Form } from "./style";

export type IRegisterUser = Omit<IRegisterResponse, "id">;

export const RegisterForm = () => {
  const { register, reset, handleSubmit } = useForm<IRegisterUser>();
  const { userRegister } = useContext(UserContext);
  const submitRegisterForm: SubmitHandler<IRegisterUser> = async (data) => {
  await  userRegister(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(submitRegisterForm)}>
      <Input label="Usuário" type="text" register={register("username")} placeholder="Digite seu usuário aqui" />
      <Input label="Email" type="email" register={register("email")} placeholder="Digite seu email aqui" />
      <Input
        label="Link da foto do perfil"
        type="url"
        register={register("avatar")}
        placeholder="Insira o link aqui"
      />
      <Input label="Senha" type="password" register={register("password")} placeholder="Digite sua senha aqui" />
      <button type="submit">Cadastrar</button>
    </Form>
  );
};
