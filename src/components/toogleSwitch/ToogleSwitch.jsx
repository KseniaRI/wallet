import { nanoid } from "nanoid"
import { useState } from "react";
import { Expence, Income, Slider, SwitchField, SwitchLabel } from "./ToogleSwitch.styled"

const idSwitch = nanoid();

export const ToogleSwitch = ({ field, form}) => {
    
    const [isChecked, setIsChecked] = useState(false);

    // useEffect(() => {
    //    if (formIsSubmitted) {
    //     setIsChecked(false);
    // }   
    // },[formIsSubmitted] )

    const addClass = (checked) => {
        if (!checked) {
            return "disabled";
        }
    }
    const handleCheckChange = () => {
        setIsChecked(!isChecked);
        form.setFieldValue(field.name, isChecked);  
    }
    
    return (
            <SwitchLabel>
                <Income className={addClass(!isChecked)}>Income</Income> 
                <SwitchField checked={isChecked} type="checkbox" id={idSwitch} name={field.name} onChange={handleCheckChange} />
                    <Slider />
                <Expence className={addClass(isChecked)}>Expence</Expence>
            </SwitchLabel>  
    )
}