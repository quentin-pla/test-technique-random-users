import {useCallback, useContext, useEffect, useState} from "react";
import {UsersContext} from "../services";
import {useNavigate} from "react-router";
import {areSameUsers, getUserData, updateUserField} from "../helpers/User.helper";
import {IUserProfileLogic, IUserProfileLogicState, UserProfileEditableField} from "../interfaces";

export const useUserProfileLogic = (userId: string): IUserProfileLogic => {
    const context = useContext(UsersContext);
    const [state, setState] = useState<IUserProfileLogicState>(() => getUserData(context.users, userId));
    const navigate = useNavigate();

    useEffect(() => {
        // If user has not been found, return back to home
        if (!state.userData) return navigate("/test-technique-random-users");
    }, [])

    const handleFieldUpdate: IUserProfileLogic["handleFieldUpdate"] = useCallback((field: UserProfileEditableField) => (value: string | number) => {
        if (!state.userData) return;
        const updatedUser = updateUserField(state.userData, field, value);
        if (areSameUsers(state.userData, updatedUser)) return;
        setState(prevState => ({...prevState, userData: updatedUser}));
        context.updateUser(updatedUser);
    }, [state.userData, context.users])

    const handleNavigateHome: IUserProfileLogic["handleNavigateHome"] = useCallback(() => {
        navigate("/test-technique-random-users");
    }, [navigate])

    return {
        userData: state.userData,
        handleFieldUpdate,
        handleNavigateHome,
    }
}