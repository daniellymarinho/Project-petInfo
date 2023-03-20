import { RegisterForm } from "../../components/form/register";
import { HeaderPage } from "../../components/headerPage";
import { FormSection, HeaderSection, StyledRegister } from "./style";

import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <StyledRegister>
      <HeaderPage/>
      <FormSection>
        <div>
          <span>Cadastro</span>
          <button onClick={() => navigate("/login")} >Voltar para o login</button>
        </div>
        <RegisterForm />
        <button className="return-button" onClick={() => navigate("/login")} >Voltar para o login</button>
      </FormSection>
    </StyledRegister>
  );
};
