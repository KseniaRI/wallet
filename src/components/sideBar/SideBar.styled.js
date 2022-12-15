import styled from "@emotion/styled";

export const StyledSideBar = styled.div`
width: 100%;
padding-top: 10px;
margin-bottom: 30px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;  
    justify-content: space-between;  
    padding-top: 20px;
    margin-bottom: 40px;
    }

    @media screen and (min-width: 1280px) { 
    width: 380px;
    padding-top: 40px;
    padding-bottom: 49px;
    padding-right: 30px;
    margin-bottom: 0;
    }
`;

export const NavBalanceWrap = styled.div`

@media screen and (min-width: 1280px) {
margin-bottom: 30px;
}
`;