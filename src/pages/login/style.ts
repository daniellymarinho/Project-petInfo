import styled from "styled-components";

export const MainPage = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  background: #fcfeff;

  @media(min-width: 800px){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 100px;
    
  }
`;

export const Headersection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: #212529;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
  
    .text1,
    .text2 {
      color: #364fc7;
    }
  }

  p {
    color: #495057;
    font-size: 16px;
  }

  @media(min-width: 800px){
    width: 20%;
  }
`;

export const FormSection = styled.section`

display: flex;
flex-direction: column;
width: 95%;
border: 1px solid #e9ecef;
padding: 5px;
gap: 15px;

.title{
    color: #212529;
    font-size: 20px;
    font-weight: 500
}



.register-button{
    background: #fcfeff ;
    border: 1px solid #e9ecef;
    padding: 10px;
    color: #212529;
    border-radius: 4px
    width: 80%;
}

div{
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        color:#212529;
    }

    p{
        width: 230px;
        color: #495057;
    }
}

@media(min-width: 800px){
  width: 350px;
}

`;
