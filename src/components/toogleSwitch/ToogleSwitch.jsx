import { nanoid } from "nanoid"
import { Slider, SwitchField, SwitchLabel } from "./ToogleSwitch.styled"

const idSwitch = nanoid();

export const ToogleSwitch = () => {

    return (
            <SwitchLabel>
                <SwitchField type="checkbox" id={idSwitch}/>
                <Slider/>
            </SwitchLabel>  
    )
}