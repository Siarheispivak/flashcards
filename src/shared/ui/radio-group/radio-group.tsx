import s from './radio-group.module.scss'
import * as RadioGroupRadix from '@radix-ui/react-radio-group';
import {clsx} from "clsx";
import {FC} from "react";
import {Typography} from "@/components/ui/typography";

export type RadioItem = {
    label: string
    value: string
}
export type RadioGroupProps = {
    value: string
    options: RadioItem[]
    onChange: (value: string) => void
    className?: string
    defaultValue?: string
    errorMessage?: string
    disabled?: boolean
    required?: boolean
    name?: string
    id?: string
}
export const RadioGroup: FC<RadioGroupProps> = props => {
    const {value, options, onChange, className, errorMessage, disabled, ...rest} = props
    const classNames = {
        root: clsx(s.root, className),
    }
    const array = [
        {
            label: 'Apple',
            value: 'apple'
        },
        {
            label: 'Banana',
            value: 'banana'
        },
        {
            label: 'Blueberry',
            value: 'blueberry'
        },
        {
            label: 'Grapes',
            value: 'grapes'
        },
        {
            label: 'Pineapple',
            value: 'pineapple'
        },
        {
            label: 'Apple',
            value: 'apple1'
        },
        {
            label: 'Banana',
            value: 'banana1'
        }
    ]
    return (
        <RadioGroupRadix.Root
            className={classNames.root}
            value={value}
            onValueChange={onChange}
            disabled={disabled}
            {...rest}
        >
            {array.map((el, i) => (
                <div className={s.container} key={i}>
                    <RadioGroupRadix.Item value={el.value} className={s.item}>
                        <RadioGroupRadix.Indicator className={s.radioGroupIndicator}/>
                    </RadioGroupRadix.Item>
                    <label className={s.label}>{el.label}</label>
                </div>
            ))}
            {errorMessage && <Typography variant={"error"}>{errorMessage}</Typography>}
        </RadioGroupRadix.Root>
    )
}
