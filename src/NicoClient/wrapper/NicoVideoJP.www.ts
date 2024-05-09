import NicoVideoJP from './NicoVideoJP';
import generateActionTrackID from '../utils/generateActionTrackID';
import BaseWrapper from './BaseWrapper';

class www_NicoVideoJP extends NicoVideoJP {
    static subDomain = 'www';
    constructor(...args: ConstructorParameters<typeof BaseWrapper>) {
        super(www_NicoVideoJP.subDomain, ...args);
    }

    async fetchVideoInfo(videoID: string) {
        const res = await this.post(videoID, {
            // path: 'api/watch/v3/',
            // login: true,
            path: 'api/watch/v3_guest/',
            params: { actionTrackId: generateActionTrackID() },
            defaultHeaders: true,
        });
        const response = res.data as NicoVideoJPRawResponse<NicoVideoJPVideoInfoData>;
        if (response.meta.status !== 200 || response.data === undefined) {
            throw new Error(`Failed to fetch video info: ${response.meta.errorCode}`);
        }
        return response.data;
    }
}

export default www_NicoVideoJP;
