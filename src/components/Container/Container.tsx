import {Outlet} from "react-router-dom";

const Container = () => (
    <div className={"app"}>
        <div className={"container"}>
            <Outlet/>
        </div>
    </div>
)

export default Container;