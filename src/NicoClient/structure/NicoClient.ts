import NicoVideoJP from '../wrapper/NicoVideoJP';
import Video from './Video';

interface NicoClientOption {
    apiClients?: { [key: string]: new () => any };
}

class NicoClient {
    private nicoVideoJP: NicoVideoJP;

    constructor(option: NicoClientOption = {}) {
        this.nicoVideoJP = new NicoVideoJP(option.apiClients?.nicoVideoJP);

        console.log('NicoAPI initialized');
    }

    async getVideo(videoID: string) {
        const data = await this.nicoVideoJP.fetchVideoInfo(videoID);
        return new Video(this, data);
    }
}

export default NicoClient;
