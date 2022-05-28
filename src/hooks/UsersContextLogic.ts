import {useEffect, useState} from "react";
import {randomUsersApi} from "../apis";
import {IUser, IUsersContext, IUsersContextState} from "../interfaces";

const initialState: IUsersContextState = {
    loaded: false,
    users: new Array<IUser>(),
}

export const useUsersContextLogic = (): IUsersContext => {
    const [state, setState] = useState<IUsersContextState>(initialState);

    useEffect(() => {
        (async () => {
            const users = await randomUsersApi.fetchRandomUsers(20);
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

    return {
        loaded: state.loaded,
        users: state.users,
        updateUser
    }
}