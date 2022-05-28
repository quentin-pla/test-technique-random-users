import React, {createContext, PropsWithChildren} from 'react';
import {IUser, IUsersContext} from "../interfaces";
import {UsersContextHooks} from "../hooks";

const initialData: IUsersContext = {
    loaded: false,
    users: new Array<IUser>(),
    updateUser: () => {
    }
}

export const UsersContextProvider = (props: PropsWithChildren<{}>) => {
    const value = UsersContextHooks.useLogic();

    return (
        <UsersContext.Provider value={value}>
            {value.loaded ? props.children : null}
        </UsersContext.Provider>
    )
}

export const UsersContext = createContext<IUsersContext>(initialData);
