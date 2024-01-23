import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/shared/ui/text-field'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'defaultValue' | 'rules'> &
  Omit<TextFieldProps, 'onChange'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  disabled,
  errorMessage,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <TextField
      disabled={disabled}
      errorMessage={errorMessage}
      onValueChange={onChange}
      value={value}
      {...rest}
    />
  )
}
