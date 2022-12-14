import styled from "@emotion/styled";
import ellipseLeft from '../../images/ellipse-left.png';
import ellipseRight from '../../images/ellipse-right.png'

export const DashboardContainer = styled.div`
position: relative;
width: 1280px;
margin: 0 auto;
display: flex;
justify-content: flex-start;
padding-left: 85px;
padding-right: 85px;
background-color: ${p => p.theme.colors.backgroundColor};
overflow: hidden;

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
    filter: blur(15px);
    opacity: 0.6;
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