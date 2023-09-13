import styled from "@emotion/styled/macro";
import PlusSvg from '../../images/icons/plus.svg'
import MinusSvg from '../../images/icons/minus.svg'

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  margin-bottom: 40px;
`;

export const SwitchField = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${p=> p.theme.colors.lightBackgroundColor};
  border-radius: 34px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p=> p.theme.colors.borderColor};
  transition: .4s;

    &::before {
      position: absolute;
      content: "";
      background-image: url(${PlusSvg});
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: center;
      height: 44px;
      width: 44px;
      left: 0;
      bottom: -3px;
      background-color:  ${p => p.theme.colors.incomeColor};
      border-radius: ${p => p.theme.radii.round};
      box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
      transition: .4s;

      ${SwitchField}:checked + &{
        transform: translateX(34px);
        background-color: ${p => p.theme.colors.expenseColor};
        background-image: url(${MinusSvg});
        box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      }
    }
`;

export const Income = styled.span`
  position: absolute;
  left: -66px;
  top: 50%;
  transform: translateY(-50%);
  color:  ${p => p.theme.colors.incomeColor};

    &.disabled{
      color: ${p => p.theme.colors.disabled};
    }
`

export const Expence = styled.span`
  position: absolute;
  left: calc(100% + 20px);
  top: 50%;
  transform: translateY(-50%);
  color: ${p => p.theme.colors.expenseColor};

  &.disabled{
    color: ${p => p.theme.colors.disabled};
  }
`