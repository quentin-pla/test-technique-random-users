import {IUser} from "../../../models/IUser";
import {IUserLogicState, UserEditableField} from "../hooks/useUserLogic";

export const getInitialState = (users: Array<IUser>): IUserLogicState => {
    const paths = window.location.pathname.split("/");
    const userId = paths[paths.length - 1];
    const userData = users.find(user => user.id === userId);
    return {userData: userData};
}

export const areSameUsers = (user1: IUser, user2: IUser): boolean => {
    return JSON.stringify(user1) === JSON.stringify(user2);
}

export const updateUserField = (userData: IUser, field: UserEditableField, value: string | number): IUser => {
    const updatedUser = {...userData};
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
        case UserEditableField.State:
            updatedUser.location.state = value as string;
            break;
    }
    return updatedUser;
}