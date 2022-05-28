import React, {useContext} from "react";
import "../styles/Home.scss";
import {UserPreview} from "../components";
import {UsersContext} from "../services";

export const HomePage = () => {
    const context = useContext(UsersContext);

    return (
        <div id={"home"} className={"d-flex flex-column align-items-center mt-5 w-100"}>
            <h1 className={"mb-3"}>Select a user</h1>
            <div className={"row usersContainer"}>
                {context.users.map(user => (
                    <React.Fragment key={user.id}>
                        <UserPreview user={user}/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}