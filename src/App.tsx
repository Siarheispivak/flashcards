import {FormValues} from "@/components/ui/auth/ui/sing-in/sign-in.tsx";
import {SignUp} from "@/components/ui/auth/ui/sing-up/sign-up.tsx";

export function App() {
    const submit = (data:FormValues) =>{
        console.log(data)
    }

    return (
        <>
            {/*<SignIn onSubmit={(data)=>{submit(data)}}/>*/}
            <SignUp onSubmit={(data)=>{submit(data)}}/>
        </>
    )
}
