import React from "react";
import "./User.scss";
import useLogic from "./useLogic";
import useRender from "./useRender";

const User = () => {
    const logic = useLogic();
    const render = useRender(logic);

    // <>
    //     Display here the full content of 1 user from the 20: name, location and
    //     email and make them editable (in the dom only)
    // </>

    return (
        <div id={"user"} className={"d-flex flex-column align-items-center mt-5 w-100"}>
            {render.backButton}
            {render.profile}
        </div>
    )
}

export default User;