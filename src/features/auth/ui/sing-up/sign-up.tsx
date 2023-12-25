import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {DevTool} from "@hookform/devtools";
import s from './sign-up.module.scss'
import {Typography} from "@/shared/ui/typography";
import {Card} from "@/shared/ui/card";
import {ControlledTextField} from "@/shared/ui/controlled/controlled-text-field/constrolled-text-field.tsx";
import {Button} from "@/shared/ui/button";


const signUpSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(3).max(30),
    confirmPassword: z.string().min(3).max(30),

})
export type FormValues = z.infer<typeof signUpSchema>
type Props = {
    onSubmit: (data: FormValues) => void
}
export const SignUp = (props: Props) => {
    const {handleSubmit, control, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''

        }
    })
    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant="large" className={s.title}>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <div className={s.form}>
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.email?.message}
                            name={'email'}
                            label={'Email'}
                        />
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.password?.message}
                            name={'password'}
                            label={'Password'}
                            type={'password'}
                        />
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.password?.message}
                            name={'confirmPassword'}
                            label={'Password'}
                            type={'password'}
                        />
                        <Button
                            className={s.button}
                            fullWidth
                            type={'submit'}
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
                <Typography
                    variant={'body2'} as={'a'}
                    className={s.alreadyHaveAnAccount}
                >
                    Already have an account?
                </Typography>
                <Button
                    variant={'link'}
                    className={s.signUp}
                    as={'a'}
                >
                    Sign In
                </Button>
            </Card>
        </>

    )
}