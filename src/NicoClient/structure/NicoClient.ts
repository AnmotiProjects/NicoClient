import { AxiosStatic } from 'axios';
import Video from './Video';
import www_NicoVideoJP from '../wrapper/NicoVideoJP.www';
import nvapi_NicoVideoJP from '../wrapper/NicoVideoJP.nvapi';
import account_NicoVideoJP from '../wrapper/NicoVideoJP.account';

interface NicoClientOption {
    sessionID?: string;
    axios: AxiosStatic;
    userAgent: string;
}

class NicoClient {
    private www_nicoVideoJP: www_NicoVideoJP;
    private nvapi_nicoVideoJP: nvapi_NicoVideoJP;
    private account_nicoVideoJP: account_NicoVideoJP;

    public sessionID?: string;
    public axios: AxiosStatic;
    public userAgent: string;

    constructor(option: NicoClientOption) {
        this.sessionID = option.sessionID;
        this.axios = option.axios;
        this.userAgent = option.userAgent;

        this.www_nicoVideoJP = new www_NicoVideoJP(this);
        this.nvapi_nicoVideoJP = new nvapi_NicoVideoJP(this);
        this.account_nicoVideoJP = new account_NicoVideoJP(this);
    }

    async getVideo(videoID: string) {
        const data = await this.www_nicoVideoJP.fetchVideoInfo(videoID);
        return new Video(this, data);
    }

    checkUpdate(frontendId: string, frontendVersion: string, osVersion?: string) {
        return this.nvapi_nicoVideoJP.fetchHello(frontendId, frontendVersion, osVersion);
    }
}

export default NicoClient;
