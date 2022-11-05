import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "components/header/Header"
import { SideBar } from "components/sideBar/SideBar"

export const SharedLayout = () => {
    return (
        <>
            <Header />
            <SideBar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </> 
    )
}