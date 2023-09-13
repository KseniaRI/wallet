import { RegistrationForm } from "components/forms/registrationForm/RegistrationForm";
import { RightBackground } from "pages/authLayout/AuthLayout.styled";
import { LeftBackground } from "./RegistrationPage.styled";

const RegistrationPage = () => {
    return (
        <>
            <LeftBackground/>
            <RightBackground>
                <RegistrationForm/>
            </RightBackground>
        </>
    )
}

export default RegistrationPage;