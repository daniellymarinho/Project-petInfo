import foto1 from "../../assets/Rectangle 2.svg";
import foto2 from "../../assets/Rectangle 3.svg";
import foto3 from "../../assets/Rectangle 4.svg";
import foto4 from "../../assets/Rectangle 5.svg";
import { HeaderSection } from "../../pages/register/style";

export const HeaderPage = () => {
    return(
        
        <HeaderSection>
        <span className="logo">Petinfo</span>
        <span className="secund-logo">Ooooooba!</span>
        <p>
          Agora vamos poder contribuir para o bem estar do seu pet por meio do
          conhecimento
        </p>
        <div>
          <div className="bloco2">
            <img src={foto1} alt="foto animal" />
            <div className="bloco1">
              <img src={foto2} alt="foto animal" />
              <img src={foto4} alt="foto animal" />
            </div>
          </div>
          <img src={foto3} alt="foto animal" />
        </div>
      </HeaderSection>
        
    )
}