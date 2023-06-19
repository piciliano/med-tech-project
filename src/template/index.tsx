import { Outlet } from "react-router-dom"
import { Header } from "../components/header"


export const Template = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}