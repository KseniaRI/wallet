import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 5;
  padding-top: 15px;
  padding-bottom: 15px;
  left: calc((100% - 320px) / 2);
  background-color: #fff;

    @media screen and (min-width: 768px) {
      left: calc((100% - 768px) / 2);  
      padding-top: 20px;
      padding-bottom: 20px;
    }

    @media screen and (min-width: 1280px) {
      left: calc((100% - 1280px) / 2);  
    }

`;

export const HeaderContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

    @media screen and (min-width: 768px) {
      width: 768px;
      padding-left: 40px;
      padding-right: 40px;
    }

    @media screen and (min-width: 1280px) {
      width: 1280px;
      padding-left: 85px;
      padding-right: 85px;
    }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;

    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
`;


export const ButtonLogout = styled.button`
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background-color: ${p => p.theme.colors.lightBackgroundColor};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  transition:  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1); 

    &:hover,
    &:focus {
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px 0px rgba(0, 0, 0, 0.2);
    } 
`;