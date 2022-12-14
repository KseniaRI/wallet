
import { Loader } from 'components/loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContainer } from './AuthLayout.styled'

const AuthLayout = () => {
    return (
        <>
          <AuthContainer>
            <Suspense fallback={<Loader  />}>
                <Outlet />
            </Suspense>
          </AuthContainer>
          <ToastContainer autoClose={2000} />
        </>
    )
}

export default AuthLayout;