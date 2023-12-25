import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {RadioGroup, RadioGroupProps} from "@radix-ui/react-radio-group";


type Props<T extends FieldValues> = Omit<UseControllerProps<T>,'rules' | 'defaultValue'> & Omit<RadioGroupProps, 'onValueChange'>

export const ControlledRadioGroup = <T extends FieldValues>({control, name,shouldUnregister,disabled,...rest}: Props<T>) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
        disabled,
        shouldUnregister,
    })
    return <RadioGroup value={value} disabled={disabled} id={name} onValueChange={onChange} {...rest}/>
}