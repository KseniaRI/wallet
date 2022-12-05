import { Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "components/header/Header"
import { SideBar } from "components/sideBar/SideBar"
import { Container } from "./DashboardPage.styled"
import { Box } from "components/Box"
import { useDispatch } from "react-redux"
import { fetchCurrentUser } from "redux/auth/auth-operations"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "components/loader/Loader"

const DashboardPage = () => {
    const dispatch = useDispatch();
    
     useEffect(() => {
        dispatch(fetchCurrentUser());
     }, [dispatch]);
    
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
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </Container>
                </Box>    
            </main>
            <ToastContainer autoClose={2000} />
        </> 
    )
}

export default DashboardPage;