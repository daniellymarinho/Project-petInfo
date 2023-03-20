import styled from "styled-components";

export const StyledRegister = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  background: #fcfeff;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 80px;
  }
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    width: 20%;

    div {
        
      img {
        margin: 5px;
      }

      .bloco1 {
        display: flex;
        flex-direction: column;

        img {
          width: 90px;
        }
      }

      .bloco2 {
        display: flex;
      }
    }
  }

  .logo {
    font-weight: 500;
    font-size: 32px;
    color: #212529;
  }

  .secund-logo {
    color: #364fc7;
    font-weight: 600;
    font-size: 32px;
  }

  p {
    font-size: 16px;
    color: #495057;
    line-height: 24px;
    width: 225px;
  }

  div{
    display: none;
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e9ecef;
  padding: 10px;
  border-radius: 4px;
  width: 90%;
  gap: 10px;

  @media (min-width: 800px) {
    width: 450px;
  }
  div {
    display: flex;
    width: 100%;
    gap: 45px;
    justify-content: center;

    span {
      font-size: 20px;
      font-weight: 500;
    }

    button {
      background: #fcfeff;
      border: 1px solid #e9ecef;
      padding: 5px;
    }
  }

  .return-button {
    background: #fcfeff;
    border: 1px solid #e9ecef;
    padding: 10px;
    width: 95%;
    font-size: 16px;
    font-weight: 500;
    width: 90%;
  }
`;
