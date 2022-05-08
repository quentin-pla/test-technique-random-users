import React, {useMemo} from "react";
import "./User.scss";
import useUserLogic from "./hooks/useUserLogic";
import useUserRender from "./hooks/useUserRender";

const User = () => {
    const logic = useUserLogic();
    const render = useUserRender(logic);

    return useMemo(() => {
        return (
            <div id={"user"} className={"d-flex flex-column align-items-center mt-5 w-100"}>
                {render.backButton}
                {render.profile}
            </div>
        )
    }, [logic.userData])
}

export default User;