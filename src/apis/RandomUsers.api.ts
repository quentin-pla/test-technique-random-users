import {IRandomUserRawData, IRandomUserRawUser, IUser} from "../interfaces";

const ENDPOINT_RANDOM_USERS = 'https://randomuser.me/api/?results=';

export const fetchRandomUsers = (count: number): Promise<Array<IUser>> => {
    return new Promise<Array<IUser>>(resolve => {
        fetch(ENDPOINT_RANDOM_USERS + count)
            .then(res => {
                if (res.ok) return res.json();
                else throw new Error("Can't fetch random users");
            })
            .then(json => {
                const rawData: IRandomUserRawData = json;
                const rawUsers = rawData.results;
                const formattedUsers = rawUsers.map(rawUser => formatRawUserToUser(rawUser));
                return resolve(formattedUsers);
            })
    })
}

const formatRawUserToUser = (rawUser: IRandomUserRawUser): IUser => {
    return {
        id: rawUser.login.uuid,
        email: rawUser.email,
        name: rawUser.name.first + " " + rawUser.name.last,
        location: {
            city: rawUser.location.city,
            country: rawUser.location.country,
            postalCode: rawUser.location.postcode,
            state: rawUser.location.state,
            street: rawUser.location.street.number + " " + rawUser.location.street.name
        },
        picture: rawUser.picture.large
    };
}