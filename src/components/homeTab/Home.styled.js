import styled from "@emotion/styled";

export const HomeWrap = styled.div`
width: 100%;
 position:relative;
 
 padding-left: 10px;
 overflow-y: scroll;
 overflow-x: initial;

    @media screen and (max-width: 767px) {
    width: 100%;
    height: 338px;
    }
    @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 750px;
    height: 550px;
    }
    @media screen and (min-width: 1280px) {
    padding-top: 46px;
    }
`;