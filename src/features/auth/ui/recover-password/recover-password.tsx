import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {DevTool} from "@hookform/devtools";
import s from './recovery-password.module.scss'
import {Card} from "@/shared/ui/card";
import {Typography} from "@/shared/ui/typography";
import {ControlledTextField} from "@/shared/ui/controlled/controlled-text-field/constrolled-text-field.tsx";
import {Button} from "@/shared/ui/button";


const recoveryPasswordSchema = z.object({
    email: z.string().email('Please enter a valid email'),
})
export type RecoveryPasswordFormValues = z.infer<typeof recoveryPasswordSchema>
type Props = {
    onSubmit: (data: RecoveryPasswordFormValues) => void
}
export const RecoveryPassword = (props: Props) => {
    const {handleSubmit, control, formState: {errors}} = useForm<RecoveryPasswordFormValues>({
        resolver: zodResolver(recoveryPasswordSchema),
        defaultValues: {
            email: '',
        }
    })
    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant="large" className={s.title}>
                    Forgot your password?
                </Typography>
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <div className={s.form}>
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.email?.message}
                            name={'email'}
                            label={'Email'}
                        />
                        <Typography variant="body2" className={s.recoveryPassword}>
                            Enter your email address and we will send you further instructions
                        </Typography>
                        <Button
                            className={s.button}
                            fullWidth
                            type={'submit'}
                        >
                            Send instructions
                        </Button>
                    </div>
                </form>
                <Typography
                    variant={'body2'} as={'a'}
                    className={s.rememberPassword}
                >
                    Did you remember your password?
                </Typography>
                <Button
                    variant={'link'}
                    className={s.tryLoggingIn}
                    as={'a'}
                >
                    Try logging in
                </Button>
            </Card>
        </>

    )
}