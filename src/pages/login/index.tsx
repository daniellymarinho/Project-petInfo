import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/form/login";
import { HeaderPage } from "../../components/headerPage";
import { FormSection, Headersection, MainPage } from "./style";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <MainPage>
      <Headersection>
        <span>Petinfo</span>
        <span>
          <span className="text1">Amor</span> e
          <span className="text2"> carinho</span> por meio do conhecimento
        </span>
        <p>
          Todas as informações para melhorar a vida do seu pet em um só lugar
        </p>
      </Headersection>
      <FormSection>
        <span className="title">Login</span>
        <LoginForm />
        <div>
          <span>Ainda não possui conta?</span>
          <p>Clicando no botão abaixo, você pode se cadastrar rapidamente</p>
        </div>

        <button className="register-button" onClick={() => navigate("/")}>
          Cadastrar
        </button>
      </FormSection>
    </MainPage>
  );
};
