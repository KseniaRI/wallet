import styled from "@emotion/styled";


export const ButtonAdd = styled.button`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
bottom: 40px;
right: 0;
border-radius: ${p => p.theme.radii.round};
width: 44px;
height: 44px;
border: ${p => p.theme.borders.none};
background-color: ${p => p.theme.colors.incomeColor};
box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
z-index: 1;
transition:  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1); 

    &:hover,
    &:focus {
     box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.9);
    } 
`;

export const Svg = styled.svg`
width: 20px;
height: 20px;
`;