import {FormValues, SignIn} from "@/components/ui/auth/ui/sing-in/sign-in.tsx";
import {SignUp} from "@/components/ui/auth/ui/sing-up/sign-up.tsx";
import {
    RecoveryPassword,
    RecoveryPasswordFormValues
} from "@/components/ui/auth/ui/recover-password/recover-password.tsx";
import {NewPassword, newPasswordFormValues} from "@/components/ui/auth/ui/new-password/new-password.tsx";
import {CheckEmail} from "@/components/ui/auth/ui/check-email";

export function App() {
    const submit = (data:FormValues) =>{
        console.log(data)
    }
    const submit2 = (data:RecoveryPasswordFormValues) =>{
        console.log(data)
    }
    const submit3 = (data:newPasswordFormValues) =>{
        console.log(data)
    }

    return (
        <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <CheckEmail email={'Siarheissss@mail.ru'}/>
            <NewPassword onSubmit={(data)=>submit3(data)} />
            <SignIn onSubmit={(data)=>{submit(data)}}/>
            <SignUp onSubmit={(data)=>{submit(data)}}/>
            <RecoveryPassword onSubmit={(data)=>{submit2(data)}}/>
        </div>
    )
}
