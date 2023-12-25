import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {Email} from "@/assets/icons";
import {Button} from "@/components/ui/button";
import s from './check-email.module.scss';

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