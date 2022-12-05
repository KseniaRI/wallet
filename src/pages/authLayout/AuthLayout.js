import { Loader } from 'components/loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './AuthLayout.styled'

const AuthLayout = () => {
    return (
        <>
            <Container>
                <Suspense fallback={<Loader  />}>
                    <Outlet />
                </Suspense>
            </Container>
            <ToastContainer autoClose={2000} />
        </>
    )
}

export default AuthLayout;