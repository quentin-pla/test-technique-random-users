import {useContext, useEffect, useState} from "react";
import {IUsersContext, UsersContext} from "../../../context/UsersContext";
import {IUser} from "../../../models/IUser";
import {useNavigate} from "react-router";

export enum UserEditableField {
    Name, Email, City, PostalCode, Street, Country
}

export interface IUserLogic {
    userData: IUser,
    editMode: boolean,
    handleFieldUpdate: (field: UserEditableField) => (value: string) => void,
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

const useUserLogic = (): IUserLogic => {
    const context = useContext<IUsersContext>(UsersContext);
    const [state, setState] = useState<IUserLogicState>(initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = window.location.pathname.substring(1);
        const userData = getUserDataById(userId);
        setState(prevState => ({...prevState, userData}));
    }, [])

    const getUserDataById = (userId: string): IUser => {
        const userData = context.users.find(user => user.id === userId);
        if (!userData) throw new Error("Can't find user with id : " + userId);
        return userData;
    }

    const handleFieldUpdate: IUserLogic["handleFieldUpdate"] = (field: UserEditableField) => (value: string | number) => {
        const updatedUser = {...state.userData};
        switch (field) {
            case UserEditableField.Name:
                updatedUser.name = value as string;
                break;
            case UserEditableField.Email:
                updatedUser.email = value as string;
                break;
            case UserEditableField.City:
                updatedUser.location.city = value as string;
                break;
            case UserEditableField.PostalCode:
                updatedUser.location.postalCode = value as number;
                break;
            case UserEditableField.Street:
                updatedUser.location.street = value as string;
                break;
            case UserEditableField.Country:
                updatedUser.location.country = value as string;
                break;
        }
        context.updateUser(updatedUser);
    }

    const handleNavigateHome: IUserLogic["handleNavigateHome"] = () => {
        navigate("/");
    }

    return {
        userData: state.userData,
        editMode: state.editMode,
        handleFieldUpdate,
        handleNavigateHome
    }
}

export default useUserLogic;