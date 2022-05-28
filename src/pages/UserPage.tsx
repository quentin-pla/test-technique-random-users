import React from "react";
import "../styles/User.scss";
import {BackButton, UserProfile} from "../components";
import {userHelper} from "../helpers";

export const UserPage = () => {
    const userId = userHelper.getUserIdFromPath(window.location.pathname);
    return (
        <div id={"user"} className={"d-flex flex-column align-items-center mt-5 w-100"}>
            <BackButton/>
            <UserProfile userId={userId}/>
        </div>
    )
}