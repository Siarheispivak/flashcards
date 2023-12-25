import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Checkbox, CheckboxProps} from "@/shared/ui/checkbox";


type Props<T extends FieldValues> = Omit<UseControllerProps<T>,'rules' | 'defaultValue'> & Omit<CheckboxProps,'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({control, name,shouldUnregister,disabled, ...rest}: Props<T>) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
        disabled,
        shouldUnregister
    })
    return <Checkbox  checked={value} disabled={disabled} onValueChange={onChange} {...rest}/>
}