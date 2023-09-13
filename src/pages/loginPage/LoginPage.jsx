import { LoginForm } from "components/forms/loginForm/LoginForm";
import {RightBackground } from "pages/authLayout/AuthLayout.styled";
import { LeftBackground } from "./LoginPage.styled";

const LoginPage = () => {
    return (
        <>
            <LeftBackground/>
            <RightBackground>
                <LoginForm/>
            </RightBackground>
        </>
    )
}

export default LoginPage;