import React from "react";
import "../styles/User.scss";
import {IUserProfileProps} from "../interfaces";
import {UserProfileHooks} from "../hooks";

export const UserProfile = (props: IUserProfileProps) => {
    const {userId} = props;
    const logic = UserProfileHooks.useLogic(userId);
    const render = UserProfileHooks.useRender(logic);
    return render.profile;
}