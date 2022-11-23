import { LoginForm } from "components/loginForm/LoginForm";
import { Container, RightBackground } from "pages/authLayout/AuthLayout.styled";
import { LeftBackground } from "./LoginPage.styled";

const LoginPage = () => {
    return (
        <Container>
            <LeftBackground/>
            <RightBackground>
                    <LoginForm/>
            </RightBackground>
        </Container>
    )
}

export default LoginPage;