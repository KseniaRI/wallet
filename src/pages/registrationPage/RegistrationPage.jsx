import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { Container, RightBackground } from "pages/CommonPagesStyles.styled";
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