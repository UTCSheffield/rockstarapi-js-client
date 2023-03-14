import { fetch } from '@sapphire/fetch';
export class Client {
    /**
     * Client Class
     * @param url The url of the server
     */
    private url;
    constructor(url: string) {
        this.url = url;
    }
    public async getRock(id: number) {
        /**
         * Get a rock from the server
         * @param id The id of the rock
         */
        const res = await fetch<IgetRockRes>(`${this.url}/rock/${id}`);
        console.log("output: ", res.output);
        console.log("log-keys: ", Object.keys(res.log));
        return res;
    }
}
interface IgetRockRes {
    /**
     * A interface for the response of the getRock api function
     */
    id: number;
    status: string;
    code: string;
    log: any[];
    output: stringOrNumber[];
}
type stringOrNumber = string | number;