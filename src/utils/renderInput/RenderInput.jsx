
import Sprite from '../../images/icons/symbol-defs.svg';
import { MobInput, CalendarButton, MobWrapper, StatWrapper, StatInput, StatButton } from "./RenderInput.styled";



export const renderMobileInput = (props, openCalendar) => {
 
  return (
    <MobWrapper>
      <MobInput {...props} />
        <CalendarButton type="button" onClick={openCalendar}>
            <svg width="24" height="24">
                <use href={`${Sprite}#icon-calendar`}></use>
            </svg>
        </CalendarButton>
      </MobWrapper>
    );
}
  
export const renderStatInput = (props, openCalendar) => {
  return (
    <StatWrapper>
        <StatInput {...props} />
        <StatButton type="button" onClick={openCalendar}>
            <svg width="18" height="9">
                <use href={`${Sprite}#icon-arrow`}></use>
            </svg>
        </StatButton>
      </StatWrapper>
    );
}
