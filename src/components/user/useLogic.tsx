import {useContext, useEffect, useState} from "react";
import {IUsersContextData, UsersContext} from "../../context/UsersContext";
import {IUser} from "../../models/IUser";
import {useNavigate} from "react-router";

export interface IUserLogic {
    userData: IUser,
    editMode: boolean,
    handleToggleEditMode: () => void,
    handleNavigateHome: () => void
}

interface IUserLogicState {
    userData: IUser,
    editMode: boolean,
}

const initialState: IUserLogicState = {
    userData: {
        email: "",
        name: "",
        id: "",
        location: {
            state: "",
            street: "",
            postalCode: 0,
            city: "",
            country: "",
        },
        picture: "",
    },
    editMode: false,
}

const useLogic = (): IUserLogic => {
    const {users} = useContext<IUsersContextData>(UsersContext);
    const [state, setState] = useState<IUserLogicState>(initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = window.location.pathname.substring(1);
        const userData = getUserDataById(userId);
        setState(prevState => ({...prevState, userData}));
    }, [])

    const getUserDataById = (userId: string): IUser => {
        const userData = users.find(user => user.id === userId);
        if (!userData) throw new Error("Can't find user with id : " + userId);
        return userData;
    }

    const handleToggleEditMode: IUserLogic["handleToggleEditMode"] = () => {
        setState(prevState => ({...prevState, editMode: !prevState.editMode}));
    }

    const handleNavigateHome: IUserLogic["handleNavigateHome"] = () => {
        navigate("/");
    }

    return {
        userData: state.userData,
        editMode: state.editMode,
        handleToggleEditMode,
        handleNavigateHome
    }
}

export default useLogic;