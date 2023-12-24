import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {DevTool} from "@hookform/devtools";
import {Card} from "@/components/ui/card";
import s from './sign-in.module.scss'
import {Typography} from "@/components/ui/typography";
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field/constrolled-text-field.tsx";
import {ControlledCheckbox} from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx";
import {Button} from "@/components/ui/button";

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(3).max(30),
    rememberMe: z.boolean().optional(),
    acceptTerms: z.boolean().optional(),

})
export type FormValues = z.infer<typeof loginSchema>
type Props = {
    onSubmit: (data: FormValues) => void
}
export const SignIn = (props: Props) => {
    const {handleSubmit, control, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
            acceptTerms: false,

        }
    })
    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant="large" className={s.title}>
                    Sign In
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
                        <ControlledCheckbox
                            control={control}
                            name={'rememberMe'}
                            label={'Remember me'}
                        />
                        <Typography
                            variant={'body2'} as={'a'}
                            className={s.recoveryPassvord}
                        >
                            Forgot Password?
                        </Typography>
                        <Button
                            className={s.button}
                            fullWidth
                            type={'submit'}
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
                <Typography
                    variant={'body2'} as={'a'}
                    className={s.dontHaveAnAccount}


                >
                    Don't have an account?
                </Typography>
                <Button
                    variant={'link'}
                    className={s.signUp}
                    as={'a'}
                >
                    Sign Up
                </Button>


            </Card>


            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}

            {/*    <ControlledTextField control={control} errorMessage={errors.password?.message} name={'password'}*/}
            {/*                         label={'password'}/>*/}
            {/*    <ControlledCheckbox control={control} name={'rememberMe'} label={'remember me'}/>*/}
            {/*    <ControlledCheckbox control={control} name={'acceptTerms'} label={'accept terms and conditions'}/>*/}
            {/*    <Button type="submit">Submit</Button>*/}
            {/*</form>*/}
        </>

    )
}