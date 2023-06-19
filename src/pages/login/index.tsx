import * as C from "./styles";
import { FormMock } from "../../../utils/mock-forms";
import ImageUser from "../../assets/images/user.png";

export const LoginArea = () => {
  return (
    <>
      <C.Container>
        <C.ContainerForm>
          <C.DivUser src={ImageUser} alt="user" />
          <C.DivForm>
            {FormMock.map((item, index) => (
              <C.SpaceForm key={index}>
                <C.FormLabel>{item.title}</C.FormLabel>
                <C.FormInput />
              </C.SpaceForm>
            ))}
          </C.DivForm>
          <C.LoginButton>Logar</C.LoginButton>
        </C.ContainerForm>
      </C.Container>
    </>
  );
};
