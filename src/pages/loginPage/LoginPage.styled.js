import styled from "@emotion/styled";
import loginImg from '../../images/login.png'

export const LeftBackground = styled.div`
    @media screen and (min-width: 1280px) {
    position: relative;
    width: 560px;
    height: 720px;
   
        &::after{
        content: "";
        position: absolute;
        background-image: url(${loginImg});
        background-repeat: no-repeat;
        background-position: center;
        width: 435px;
        height: 420px;
        left: 50%;
        top: 70%;
        transform: translate(-50%, -70%)
        }
    }
`;