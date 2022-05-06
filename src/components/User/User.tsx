import React from "react";
import "./User.scss";
import useUserLogic from "./hooks/useUserLogic";
import useUserRender from "./hooks/useUserRender";

const User = () => {
    const logic = useUserLogic();
    const render = useUserRender(logic);

    // <>
    //     Display here the full content of 1 user from the 20: name, location and
    //     email and make them editable (in the dom only)
    // </>

    return (
        <div id={"user"} className={"d-flex flex-column align-items-center justify-content-center w-100"}>
            {render.backButton}
            {render.profile}
        </div>
    )
}

export default User;