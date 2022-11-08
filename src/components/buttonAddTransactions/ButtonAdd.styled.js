import styled from "@emotion/styled";


export const ButtonAdd = styled.button`
position: absolute;
bottom: 40px;
right: 0;
border-radius: ${p => p.theme.radii.round};
width: 44px;
height: 44px;
border: ${p => p.theme.borders.none};
background-color: ${p => p.theme.colors.incomeColor};
box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
`;