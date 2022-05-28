import {IUser, IUserProfileLogicState, UserProfileEditableField} from "../interfaces";

export const getUserIdFromPath = (path: string): string => {
    const paths = path.split("/");
    return paths[paths.length - 1];
}

export const getUserData = (users: Array<IUser>, userId: string): IUserProfileLogicState => {
    const userData = users.find(user => user.id === userId);
    return {userData: userData};
}

export const areSameUsers = (user1: IUser, user2: IUser): boolean => {
    return JSON.stringify(user1) === JSON.stringify(user2);
}

export const updateUserField = (userData: IUser, field: UserProfileEditableField, value: string | number): IUser => {
    const updatedUser = {...userData};
    switch (field) {
        case UserProfileEditableField.Name:
            updatedUser.name = value as string;
            break;
        case UserProfileEditableField.Email:
            updatedUser.email = value as string;
            break;
        case UserProfileEditableField.City:
            updatedUser.location.city = value as string;
            break;
        case UserProfileEditableField.PostalCode:
            updatedUser.location.postalCode = value as number;
            break;
        case UserProfileEditableField.Street:
            updatedUser.location.street = value as string;
            break;
        case UserProfileEditableField.Country:
            updatedUser.location.country = value as string;
            break;
        case UserProfileEditableField.State:
            updatedUser.location.state = value as string;
            break;
    }
    return updatedUser;
}