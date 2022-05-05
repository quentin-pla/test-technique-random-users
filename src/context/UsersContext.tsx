import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {fetchRandomUsers} from "../api/randomUsers";

export interface IUsersContextData {
    users: Array<IUser>,
}

interface IUsersContextState {
    loaded: boolean,
    users: Array<IUser>,
}

const initialState: IUsersContextState = {
    loaded: false,
    users: new Array<IUser>(),
}

const UsersContextProvider = (props: PropsWithChildren<{}>) => {
    const [state, setState] = useState<IUsersContextState>(initialState);

    useEffect(() => {
        (async () => {
            const users = await fetchRandomUsers(20);
            setState(prevState => ({...prevState, users, loaded: true}));
        })()
    }, [])

    const data: IUsersContextData = {
        users: state.users
    }

    return (
        <UsersContext.Provider value={data}>
            {state.loaded ? props.children : null}
        </UsersContext.Provider>
    )
}

export const UsersContext = createContext<IUsersContextData>(initialState);

export default UsersContextProvider;