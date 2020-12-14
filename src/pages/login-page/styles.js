import styled from "styled-components";
import { Container } from "../../styles/styles_login_register";

export const ContainerStyled = styled(Container)`
  height: 60vh;

  h1 {
    margin-bottom: 15px;
  }
  @media (max-width: 1200px) {
    width: 34%;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    width: 42%;
  }
  @media only screen and (max-width: 767px) {
    width: 55%;
    height: 70vh;
    margin-top: 5vh;
    h1 {
      margin-bottom: 5px;
    }
    .buttonStyled button {
      margin-top: 30px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 630px) {
    width: 68%;
  }
  @media (max-width: 480px) {
    width: 90%;
    height: 60vh;
    .buttonStyled button {
      margin-bottom: 20px;
    }
  }
`;

// @media (max-width: 1200px) {

// }
// @media (min-width:768px) and (max-width:979px) {}
// @media only screen and (max-width: 767px) {}
// @media (max-width: 480px) {}
