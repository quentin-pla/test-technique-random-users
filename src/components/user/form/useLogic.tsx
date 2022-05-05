import {IUser} from "../../../models/IUser";
import {useState} from "react";

export enum UserEditableField {
    Name, Email, City, PostalCode, Street, Country
}

export interface IUserFormLogic {
    userData: IUser,
    handleEditField: (field: UserEditableField) => (e: any) => void,
}

export interface IUserFormLogicState {
    formUserData: IUser
}

const useLogic = (props: { userData: IUser }): IUserFormLogic => {
    const [state, setState] = useState<IUserFormLogicState>({formUserData: props.userData});

    const handleEditField: IUserFormLogic["handleEditField"] = (field: UserEditableField) => (e: any) => {
        const value = e.target.value;
        const userData = {...props.userData};
        setUserField(userData, field, value);
    }

    const setUserField = (user: IUser, field: UserEditableField, value: any) => {
        switch (field) {
            case UserEditableField.Name:
                user.name = value;
                break;
            case UserEditableField.Email:
                user.email = value;
                break;
            case UserEditableField.City:
                user.location.city = value;
                break;
            case UserEditableField.PostalCode:
                user.location.postalCode = value;
                break;
            case UserEditableField.Street:
                user.location.street = value;
                break;
            case UserEditableField.Country:
                user.location.country = value;
                break;
        }
    }

    return {
        userData: props.userData,
        handleEditField
    }
}

export default useLogic;