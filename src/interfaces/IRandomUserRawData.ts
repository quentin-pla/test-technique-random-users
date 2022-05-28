import {IRandomUserRawUser} from "./index";

export interface IRandomUserRawData {
    results: Array<IRandomUserRawUser>,
    info: {
        "seed": string,
        "results": number,
        "page": number,
        "version": string
    }
}
