import React from "react";
import "./Home.scss";
import useHomeLogic from "./hooks/useHomeLogic";
import useHomeRender from "./hooks/useHomeRender";

const Home = () => {
    const logic = useHomeLogic();
    const render = useHomeRender(logic);

    return (
        <div id={"home"} className={"d-flex flex-column align-items-center mt-5 w-100"}>
            <h1 className={"mb-3"}>Select a user</h1>
            {render.users}
        </div>
    )
}

export default Home;