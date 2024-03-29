import styled from "@emotion/styled";
import { ErrorMessage, Field, Form } from "formik";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  opacity: 1;
  z-index: 998;
`;

export const ButtonClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  transition:  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus{
       box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px 0px rgba(0, 0, 0, 0.2);
    }
`
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 310px;
  height: 650px;
  padding-top: 40px;
  padding-right: 63px;
  padding-left: 67px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.form};
  background-color: ${p => p.theme.colors.lightBackgroundColor};

    @media screen and (min-width: 768px) {
      width: 540px;
      height: 617px;
    }
`;

export const Logout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 460px;
  padding-top: 80px;
  padding-right: 63px;
  padding-left: 67px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.form};
  background-color: ${p => p.theme.colors.lightBackgroundColor};

  @media screen and (min-width: 768px) {
    width: 440px;
    height: 440px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.normal};
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: 40px;
  text-align:center;
`;

const StyledField = styled(Field)`
  border: ${p => p.theme.borders.none};
  border-bottom: ${p => p.theme.borders.normal};
  border-bottom-color: ${p => p.theme.colors.borderColor};
  padding-bottom: 10px;
  padding-left: 15px;
  outline: none;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const CategoryField = styled(StyledField)`
  width: 100%;
  margin-bottom: 40px;
`;

export const CommentField = styled(StyledField)`
  width: 100%;
`;

export const FieldsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
`;

export const AmountFieldWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
`;

export const ShortField = styled(StyledField)`
  padding-bottom: 10px;
  text-align: center;
  width: 190px;
`;

export const Option = styled.option`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: ${p => p.theme.radii.form};
`;

export const AmountErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  color: red;
`;

export const CategoryErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 50%;
  color: red;
`

