import styled, {css} from "styled-components";

interface ContainerProps {
  display: string;
}

export const Container = styled.div<ContainerProps>`
padding: 10px;
  width: 50vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  z-index: 2;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;

  ${(props) =>
    props.display &&
    css`
      transform: translateX(0);
    `}
`;


export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 2px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    justify-content: center;
    margin-top: 5%;
    li {
      height: 25px;
      color: white;
      position: relative;
      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: white;
        transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
        transform: scaleX(0);
        transform-origin: left;
      }

      :hover {
        cursor: pointer;
        ::after {
          width: 100%;
          transform: scaleX(1);
        }
      }
    }
  }
`;


export const X = styled.p`
  margin: 10px;
  color: white;
  text-align: end;
  cursor: pointer;
  :hover{
    font-size: 18px;
  }
`
