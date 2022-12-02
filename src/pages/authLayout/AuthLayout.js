import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import { Container } from './AuthLayout.styled'

const AuthLayout = () => {
    return (
        <>
            <Container>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </Container>
            {/* <ToastContainer autoClose={2000} /> */}
        </>
    )
}

export default AuthLayout;