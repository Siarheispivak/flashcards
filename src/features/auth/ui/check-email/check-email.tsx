import {Email} from "@/shared/assets/icons";
import s from './check-email.module.scss';
import {Card} from "@/shared/ui/card";
import {Typography} from "@/shared/ui/typography";
import {Button} from "@/shared/ui/button";

export type Props = {
    email: string
}
export const CheckEmail = ({email}: Props) => {

    return (
        <Card className={s.card}>
            <div className={s.container}>

            <Typography variant={'large'} className={s.title}>
                Check Email
            </Typography>
            <Email className={s.emailIcon}/>
            <Typography variant={'body2'} className={s.instructions}>
                We’ve sent an Email with instructions to {email}
            </Typography>
            <Button
                className={s.button}
                fullWidth
                type={'submit'}
                >
                Back to Sign In
            </Button>
            </div>
        </Card>
    )
}