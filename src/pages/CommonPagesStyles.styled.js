import styled from "@emotion/styled";
import ellipseLeft from '../images/ellipse-left.png';
import ellipseRight from '../images/ellipse-right.png';


export const Container = styled.div`
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 1280px;
    height: 720px;
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
`;

export const RightBackground = styled.div`
    position: relative;
    width: 720px;
    height: 720px;
    background-color: ${p => p.theme.colors.secondaryBackgroundColor};
`;