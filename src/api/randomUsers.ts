import {IUser} from "../models/IUser";

const ENDPOINT_RANDOM_USERS = 'https://randomuser.me/api/?results=';

interface IRandomUserRawData {
    results: Array<IRandomUserRawUser>,
    info: {
        "seed": string,
        "results": number,
        "page": number,
        "version": string
    }
}

interface IRandomUserRawUser {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string,
    },
    location: {
        street: {
            number: number,
            name: string,
        },
        city: string,
        state: string,
        country: string,
        postcode: number,
        coordinates: {
            latitude: string,
            longitude: string,
        },
        timezone: {
            offset: string,
            description: string,
        }
    },
    email: string,
    login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string,
    },
    dob: {
        date: string,
        age: number,
    },
    registered: {
        date: string,
        age: number,
    },
    phone: string,
    cell: string,
    id: {
        name: string,
        value: string,
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    },
    nat: string,
}

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