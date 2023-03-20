import styled from "styled-components";

export const StyleInput = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;

  input {
    height: 45px;
    border-radius: 4px;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    padding: 0px 10px;
  }

  label{
    font-size: 16px;
    color: #212529;
    font-weight: 500
  }
`;
