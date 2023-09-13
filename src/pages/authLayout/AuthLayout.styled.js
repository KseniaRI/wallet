import styled from "@emotion/styled/macro";
import ellipseLeft from '../../images/ellipse-left.png';
import ellipseRight from '../../images/ellipse-right.png';

export const AuthContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: ${p => p.theme.colors.lightBackgroundColor};
    
        @media screen and (min-width: 320px) {
            width: 320px;
        }
        @media screen and (min-width: 768px) {
            position: relative;
            width: 768px;
            overflow: hidden;
            background-color: ${p => p.theme.colors.backgroundColor};

            &::before {
                content: "";
                position: absolute;
                background-image: url(${ellipseLeft});
                background-repeat: no-repeat;
                background-position: bottom left;
                bottom: 0;
                left: 0;
                width: 618px;
                height: 547px;
            }

            &::after {
                content: "";
                position: absolute;
                background-image: url(${ellipseRight});
                background-repeat: no-repeat;
                background-position: top right;
                width: 618px;
                height: 547px;
                right: 0;
                top: 0;
                filter: blur(15px);
                opacity: 0.6;
            }
        }
        
        @media screen and (min-width: 1280px) {
            display: flex;  
            width: 1280px;
        }
`;

export const RightBackground = styled.div`
    @media screen and (min-width: 1280px) {
        position: relative;
        width: 720px;
        height: 100%;
        background-color: ${p => p.theme.colors.secondaryBackgroundColor};
    }
`;