import ApiClient from './apiClients/nicoVideoJP';
import generateActionTrackID from '../utils/generateActionTrackID';

class NicoVideoJP {
    private apiClient: ApiClient;

    constructor(apiClient?: new () => ApiClient) {
        this.apiClient = new (apiClient || ApiClient)();
    }

    async fetchVideoInfo(videoID: string) {
        const res = await this.apiClient.post(videoID, {
            subDomain: 'www',
            path: 'api/watch/v3_guest/',
            params: {
                actionTrackId: generateActionTrackID(),
            },
        });
        const response = res.data as NicoVideoJPRawResponse<NicoVideoJPVideoInfoData>;
        if (response.meta.status !== 200 || response.data === undefined) {
            throw new Error(`Failed to fetch video info: ${response.meta.errorCode}`);
        }
        return response.data;
    }
}

export default NicoVideoJP;
