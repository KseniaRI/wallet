import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "components/header/Header"
import { SideBar } from "components/sideBar/SideBar"
import { Container } from "./SharedLayout.styled"
import { Box } from "components/Box"

export const SharedLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Box as="section"
                    pt="80px">
                    <Container>
                        <SideBar />
                        <Box as="div"
                            width="1px"
                            height="640px"
                            borderRight="1px solid #E7E5F2"
                            boxShadow="-1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6)"/>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Outlet />
                        </Suspense>
                    </Container>
                </Box>    
            </main>
        </> 
    )
}