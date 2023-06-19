import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ThemeImageBody = styled.img`
  width: 100vw;
  height: 90%;
  position: absolute;
  opacity: 0.4;
`;

export const ContainerForm = styled.div`
  width: 70%;
  height: 50%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 30px 19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px 19px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px 19px rgba(0, 0, 0, 0.75);
  z-index: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 2560px) {
    width: 20%;
    height: 60%;
  }
`;

export const DivForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const FormInput = styled.input`
  height: 40px;
  width: 80%;
  outline: none;
  border-radius: 8px;
  border: 0;
  padding: 5px;
`;
export const FormLabel = styled.label`
  color: white;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const SpaceForm = styled.div`
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivUser = styled.img`
  border-radius: 55px;
  background-color: gray;

  @media (min-width: 768px) {
    width: 10%;
  }
`;
export const LoginButton = styled.button`
  margin-top: 10px;
  height: 30px;
  width: 80%;
  color: white;
  border: 1px solid;
  background-color: gray;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    border: none;
    -webkit-box-shadow: 0px 1px 20px 4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 20px 4px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 20px 4px rgba(0, 0, 0, 0.75);
  }
`;
