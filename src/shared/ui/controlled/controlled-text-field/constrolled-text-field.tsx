import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {TextField, TextFieldProps} from "@/shared/ui/text-field";


type Props<T extends FieldValues> = Omit<UseControllerProps<T>,'rules' | 'defaultValue'> & Omit<TextFieldProps, 'onChange'>

export const ControlledTextField = <T extends FieldValues>({control, name,shouldUnregister,disabled, errorMessage,...rest}: Props<T>) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
        disabled,
        shouldUnregister,
    })
    return <TextField errorMessage={errorMessage} value={value} disabled={disabled} onValueChange={onChange} {...rest}/>
}