import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './AuthLayout.styled'

const AuthLayout = () => {
    return (
        <Container>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}

export default AuthLayout;