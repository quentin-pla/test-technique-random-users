import {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {IUsersContext, UsersContext} from "../../../context/UsersContext";
import {IUser} from "../../../models/IUser";
import {useNavigate} from "react-router";
import {areSameUsers, getInitialState, updateUserField} from "../helpers/userHelpers";

export enum UserEditableField {
    Name, Email, City, PostalCode, Street, Country, State
}

export interface IUserLogic {
    userData?: IUser,
    handleFieldUpdate: (field: UserEditableField) => (value: string) => void,
    handleNavigateHome: () => void,
}

export interface IUserLogicState {
    userData?: IUser,
}

const useUserLogic = (): IUserLogic => {
    const context = useContext<IUsersContext>(UsersContext);
    const [state, setState] = useState<IUserLogicState>(() => getInitialState(context.users));
    const navigate = useNavigate();

    useEffect(() => {
        // If user has not been found, return back to home
        if (!state.userData) return navigate("/");
    }, [])

    const handleFieldUpdate: IUserLogic["handleFieldUpdate"] = useCallback((field: UserEditableField) => (value: string | number) => {
        if (!state.userData) return;
        const updatedUser = updateUserField(state.userData, field, value);
        if (areSameUsers(state.userData, updatedUser)) return;
        setState(prevState => ({...prevState, userData: updatedUser}));
        context.updateUser(updatedUser);
    }, [state.userData, context.users])

    const handleNavigateHome: IUserLogic["handleNavigateHome"] = () => {
        navigate("/");
    }

    return useMemo(() => ({
        userData: state.userData,
        handleFieldUpdate,
        handleNavigateHome,
    }), [state.userData])
}

export default useUserLogic;