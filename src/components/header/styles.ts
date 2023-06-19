import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ;
`
export const Left = styled.div`
    font-size: 40px;
    margin-left: 10px;
`
export const Right = styled.div`
    ul{
        list-style: none;
        display: flex;
        gap: .6em ;
      li{
        color: white;
        :hover{
            text-decoration: underline;
            cursor: pointer;
            color: #3c486b;
        }
      }
    }
`
export const MedTechLogo = styled.img`
    margin-right: 10px;
    width: 90px;
    height: 70px;
    object-fit: cover;
    :hover{
        cursor: pointer;
    }
`

export const MenuButton = styled.img`
    margin-left: 10px;
    width: 30px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`