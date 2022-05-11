import {useContext, useMemo} from "react";
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
        navigate("/test-technique-random-users/" + userId);
    }

    return useMemo(() => ({
        users: context.users,
        handleUserClick,
    }), [context.users])
}

export default useHomeLogic;