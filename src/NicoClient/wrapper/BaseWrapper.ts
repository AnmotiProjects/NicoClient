import { AxiosStatic } from 'axios';
import NicoClient from '../structure/NicoClient';

class BaseWrapper {
    protected readonly client: NicoClient;
    protected get sessionID() {
        return this.client.sessionID;
    }
    protected get axios() {
        return this.client.axios;
    }
    protected get userAgent() {
        return this.client.userAgent;
    }

    constructor(client: NicoClient) {
        this.client = client;
    }
}

export default BaseWrapper;
