import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { Container, RightBackground } from "pages/authLayout/AuthLayout.styled";
import { LeftBackground } from "./RegistrationPage.styled";

const RegistrationPage = () => {
    return (
        <Container>
            <LeftBackground></LeftBackground>
            <RightBackground>
                    <RegistrationForm/>
            </RightBackground>
        </Container>
    )
}

export default RegistrationPage;