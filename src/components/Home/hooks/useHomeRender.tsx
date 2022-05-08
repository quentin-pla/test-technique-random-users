import React, {useMemo} from "react";
import {IHomeLogic} from "./useHomeLogic";
import {IUser} from "../../../models/IUser";

export interface IHomeRender {
    users: JSX.Element,
}

const useHomeRender = (logic: IHomeLogic): IHomeRender => {
    const renderUser = (user: IUser): JSX.Element => (
        <div key={user.id} className={"col col-12 col-md-4 p-3"}>
            <div className={"button"} onClick={logic.handleUserClick(user.id)}>
                {user.name}
            </div>
        </div>
    )

    const renderUsers = (): JSX.Element => (
        <div className={"row usersContainer"}>
            {logic.users.map(user => renderUser(user))}
        </div>
    )

    return useMemo(() => ({
        users: renderUsers()
    }), [logic.users])
}

export default useHomeRender;