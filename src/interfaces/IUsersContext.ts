import {IUser} from "./index";

export interface IUsersContext {
    loaded: boolean,
    users: Array<IUser>,
    updateUser: (user: IUser) => void,
}