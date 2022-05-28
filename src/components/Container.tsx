import {Outlet} from "react-router-dom";

export const Container = () => (
    <div className={"app"}>
        <div className={"container"}>
            <Outlet/>
        </div>
    </div>
)