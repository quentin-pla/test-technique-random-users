export interface IUser {
    id: string,
    name: string,
    email: string,
    location: {
        street: string,
        city: string,
        state: string,
        country: string,
        postalCode: number,
    },
    picture: string
}