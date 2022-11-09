import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { Container, LeftBackground, RightBackground } from "./RegistrationPage.styled";

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