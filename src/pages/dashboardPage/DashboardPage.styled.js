import styled from "@emotion/styled";
import ellipseLeft from '../../images/ellipse-left.png';
import ellipseRight from '../../images/ellipse-right.png'

export const Section = styled.section`
padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

export const DashboardContainer = styled.div`
position: relative;
display: flex;
justify-content: flex-start;
flex-direction: column;
width: 100%;
height: 568px;
margin: 0 auto;
padding-left: 20px;
padding-right: 20px;
background-color: ${p => p.theme.colors.backgroundColor};
overflow: hidden;

@media screen and (min-width: 320px) {
   width: 320px; 
 } 

 @media screen and (min-width: 768px) {
   width: 768px; 
   height: 1024px;
   padding-left: 40px;
   padding-right: 40px;

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
 }

 @media screen and (min-width: 1280px) {
   flex-direction: row; 
   width: 1280px; 
   height: 720px;
   padding-left: 85px;
   padding-right: 85px;
 } 
`;