import React, {createContext, PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {IUser} from "../models/IUser";
import {fetchRandomUsers} from "../api/randomUsers";

export interface IUsersContext {
    users: Array<IUser>,
    updateUser: (user: IUser) => void,
}

interface IUsersContextState {
    loaded: boolean,
    users: Array<IUser>,
}

const initialData: IUsersContext = {
    users: new Array<IUser>(),
    updateUser: () => {
    }
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

    const updateUser = (user: IUser) => {
        setState(prevState => {
            let users = [...prevState.users];
            const userIndex = users.findIndex(u => u.id === user.id);
            if (userIndex < 0) throw new Error("Can't find user with id : " + user.id);
            users[userIndex] = user;
            return {...prevState, users};
        })
    }

    const data: IUsersContext = {
        users: state.users,
        updateUser
    }

    return useMemo(() => (
        <UsersContext.Provider value={data}>
            {state.loaded ? props.children : null}
        </UsersContext.Provider>
    ), [state.loaded, state.users])
}

export const UsersContext = createContext<IUsersContext>(initialData);

export default UsersContextProvider;