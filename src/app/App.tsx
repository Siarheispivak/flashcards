import {FormValues, SignIn} from "@/features/auth/ui/sing-in";
import {RecoveryPassword, RecoveryPasswordFormValues} from "@/features/auth/ui/recover-password";
import {NewPassword, newPasswordFormValues} from "@/features/auth/ui/new-password";
import {CheckEmail} from "@/features/auth/ui/check-email";
import {SignUp} from "@/features/auth/ui/sing-up";


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
            <SignUp onSubmit={(data)=>{submit2(data)}}/>
            <RecoveryPassword onSubmit={(data)=>{submit2(data)}}/>
        </div>
    )
}
