import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {DevTool} from "@hookform/devtools";

import s from './new-password.module.scss'
import {Typography} from "@/shared/ui/typography";
import {Card} from "@/shared/ui/card";
import {ControlledTextField} from "@/shared/ui/controlled/controlled-text-field/constrolled-text-field.tsx";
import {Button} from "@/shared/ui/button";

const newPasswordSchema = z.object({
    newPassword: z.string().min(3).max(30),
})
export type newPasswordFormValues = z.infer<typeof newPasswordSchema>

export type Props = {
    onSubmit: (data: newPasswordFormValues) => void
}

export const NewPassword = (props: Props) => {
    const {handleSubmit, control, formState: {errors}} = useForm<newPasswordFormValues>({
        resolver: zodResolver(newPasswordSchema),
        defaultValues: {
            newPassword: '',
        }
    })
    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant="large" className={s.title}>
                    Create new password
                </Typography>
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <div className={s.form}>
                    <ControlledTextField
                        control={control}
                        name={"newPassword"}
                        type={'password'}
                        label={'Password'}
                        errorMessage={errors.newPassword?.message}
                    />
                        <Typography variant="body2" className={s.createPassword}>
                            Create new password and we will send you further instructions to email
                        </Typography>
                    <Button
                        className={s.button}
                        type={"submit"}
                        fullWidth
                    >
                        Create new password
                    </Button>
                    </div>
                </form>
            </Card>
        </>
    )
}
