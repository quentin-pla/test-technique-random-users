import {IUser} from "./index";

export interface IUsersContextState {
    loaded: boolean,
    users: Array<IUser>,
}