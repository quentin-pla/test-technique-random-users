import {useContext} from "react";
import {IUsersContextData, UsersContext} from "../../context/UsersContext";
import {IUser} from "../../models/IUser";
import {useNavigate} from "react-router";

export interface IHomeLogic {
    users: Array<IUser>,
    handleUserClick: (userId: string) => () => void,
}

const useLogic = (): IHomeLogic => {
    const context = useContext<IUsersContextData>(UsersContext);
    const navigate = useNavigate();

    const handleUserClick = (userId: string) => () => {
        navigate("/" + userId);
    }

    return {
        users: context.users,
        handleUserClick,
    }
}

export default useLogic;