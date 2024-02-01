import styled from "styled-components";

export const ContenedorFormulario = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: CENTER;
`;

export const ContenedorForms = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  form {
    gap: 2em;
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    place-self: CENTER;
  }
`;
export const ContendorButton = styled.section`
  width: 100%;
  margin-bottom: 30px;
  button {
    width: 30%;
    margin-top: 20px;
  }
  button:hover {
    color: #e55862;
    border: 1px solid #e55862;
  }
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  /* label {
    text-align: left;
    width: 10%;
    position: relative;
    top: 40px;
    left: 2px;
    
    z-index: 1;
  } */
  input {
    z-index: 2;
    border: none;
    height: 40px;
    background-color: #3b3b3b63;
    color: white;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
  }
  input::placeholder {
    font-family: coscu;
    color: #ffffff60;
    font-size: 1.5em;
  }
  textarea {
    border: none;
    background-color: #3b3b3b63;
    max-height: 350px;
    min-height: 150px;
    resize: vertical;
    margin-bottom: 20px;
    color: white;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
  }
  textarea::placeholder {
    font-family: coscu;
    color: #ffffff60;
    font-size: 1.5em;
  }
  div {
    color: #e55862;
  }
`;
