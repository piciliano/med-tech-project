import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    padding: 10px;
    display: flex;
`

export const Img = styled.img`
    width: 100%;
    height: 100px;
    object-fit:fill;
`

export const Box = styled.div`
    width: 95vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BoxTwo = styled.div`
   display: flex;
   flex-direction: column;
    width: 95vw;
    height: 40vh;
    justify-content: center;
    align-items: center;
`
export const OptionsStyle = styled.div`
    width: 40vw;
    height: 30px;
    border: 1px solid ;
    border-radius: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(90deg, rgba(25,17,43,0.9421338155515371) 35%, rgba(7,30,47,1) 100%, rgba(0,212,255,1) 100%);
`