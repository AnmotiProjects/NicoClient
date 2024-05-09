import NicoVideoJP from './NicoVideoJP';
import BaseWrapper from './BaseWrapper';

class nvapi_NicoVideoJP extends NicoVideoJP {
    static subDomain = 'nvapi';
    constructor(...args: ConstructorParameters<typeof BaseWrapper>) {
        super(nvapi_NicoVideoJP.subDomain, ...args);
    }

    async fetchHello(frontendId: string, frontendVersion: string, osVersion?: string) {
        const res = await this.get('v1/hello', {
            headers: {
                'X-Frontend-Id': frontendId,
                'X-Frontend-Version': frontendVersion,
            },
            params: { osVersion },
        });
        const response = res.data as NicoVideoJPRawResponse<NicoVideoJPHelloData>;
        return response.data;
    }
}

export default nvapi_NicoVideoJP;
