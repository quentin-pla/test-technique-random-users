import React from "react";
import {IUser} from "../../../models/IUser";
import useLogic from "./useLogic";
import useRender from "./useRender";

export interface IUserFormProps {
    userData: IUser,
}

const UserForm = (props: IUserFormProps) => {
    const logic = useLogic(props);
    const render = useRender(logic);

    return (
        <div>
            User Form
        </div>
    )
}

export default UserForm;