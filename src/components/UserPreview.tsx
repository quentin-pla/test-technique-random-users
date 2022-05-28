import React, {useMemo} from "react";
import {useNavigate} from "react-router";
import {IUserPreviewProps} from "../interfaces";

export const UserPreview = (props: IUserPreviewProps) => {
    const navigate = useNavigate();

    const handleUserClick = (userId: string) => () => navigate("/test-technique-random-users/" + userId);

    return useMemo(() => (
        <div className={"col col-12 col-md-4 p-3"}>
            <div className={"button"} onClick={handleUserClick(props.user.id)}>
                {props.user.name}
            </div>
        </div>
    ), [props.user])
}