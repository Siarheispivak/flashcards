import {ChangeEvent, useState} from "react";
import {TextField} from "@/shared/ui/text-field";
import {Typography} from "@/shared/ui/typography";
import {Button} from "@/shared/ui/button";
import {Camera, Edit, Logout} from "@/shared/assets/icons";
import s from './profile-information.module.scss'
import {Card} from "@/shared/ui/card";
import Avatar from "@/shared/assets/icons/avatar.tsx";


type Props = {
    email: string
    avatar: string
    onLogout: () => void
    onAvatarChange: (newAvatar: string) => void
    value: string
    onNameChange: (newValue: string) => void
}

export const ProfileInformation = ({value, onNameChange, email,onAvatarChange,onLogout}: Props) => {
    let [editMode, setEditMode] = useState(false);
    let [name, setName] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setName(value);
    };
    const activateViewMode = () => {
        setEditMode(false);
        onNameChange(name);
    };
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const handlerAvatarChanged = () => {
        onAvatarChange('new avatar')
    }
    const handleLogout = () => {
        onLogout()
    }

    const profileName = editMode ? (
        <TextField value={name} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
    ) : (
        <Typography variant={'h1'} onDoubleClick={activateEditMode}>{value}</Typography>
    );

    return (

        <>
            <Card className={s.card}>
                <Typography variant={'large'} className={s.title}>
                    Personal Information
                </Typography>
                <div className={s.photoContainer}>
                    <div className={s.containerInner}>
                        {/*<img src={avatar} alt="avatar"/>*/}
                        <Avatar className={s.avatar}/>
                        <Button variant={'secondary'} onClick={handlerAvatarChanged} className={s.button}>
                            <Camera/>
                        </Button>
                    </div>
                </div>
                <div className={s.name}>
                {profileName}
                <Edit/>
                </div>
                <Typography variant={'body2'} className={s.email}>
                    {email}
                </Typography>
                <Button variant={'secondary'}>
                    <Logout className={s.logout} onClick={handleLogout}/>
                    Logout
                </Button>
            </Card>
        </>
    )
}


// let [editMode, setEditMode] = useState(false);
// let [title, setTitle] = useState(value);
//
// const activateEditMode = () => {
//     setEditMode(true);
//     setTitle(value);
// };
// const activateViewMode = () => {
//     setEditMode(false);
//     onNameChange(title);
// };
// const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.currentTarget.value);
// };
//
// let editableTypography = editMode ? <Typography variant={'h1'} className={s.name} onChange={changeTitle} autoFocus onBlur={activateViewMode}>
//         {title}
//     </Typography>
//     :
//     <span onDoubleClick={activateEditMode}>{value}</span>
//

