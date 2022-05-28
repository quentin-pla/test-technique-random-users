import {IUser, UserProfileEditableField} from "./index";

export interface IUserProfileLogic {
    userData?: IUser,
    handleFieldUpdate: (field: UserProfileEditableField) => (value: string) => void,
    handleNavigateHome: () => void,
}