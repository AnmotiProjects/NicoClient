import NicoClient from './NicoClient';

class Base {
    protected client: NicoClient;

    constructor(client: NicoClient) {
        this.client = client;
    }
}

export default Base;
