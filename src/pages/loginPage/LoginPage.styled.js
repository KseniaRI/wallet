import styled from "@emotion/styled";
import loginImg from '../../images/login.png'

export const LeftBackground = styled.div`
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
        top: 50%;
        transform: translate(-50%, -50%)
    }
`;