import {useContext} from "react";
import {IUsersContext, UsersContext} from "../../../context/UsersContext";
import {IUser} from "../../../models/IUser";
import {useNavigate} from "react-router";

export interface IHomeLogic {
    users: Array<IUser>,
    handleUserClick: (userId: string) => () => void,
}

const useHomeLogic = (): IHomeLogic => {
    const context = useContext<IUsersContext>(UsersContext);
    const navigate = useNavigate();

    const handleUserClick = (userId: string) => () => {
        navigate("/" + userId);
    }

    return {
        users: context.users,
        handleUserClick,
    }
}

export default useHomeLogic;