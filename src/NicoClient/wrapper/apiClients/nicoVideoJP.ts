import axios from 'axios';

const defaultConfig = {
    protocol: 'https',
    baseDomain: 'nicovideo.jp',
    userAgent: 'NicoAPI/0.0.1;webmaster@anmoti.com;niconico/118200835;',
    header: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'X-Frontend-Id': '6',
        'X-Frontend-Version': '0',
        'X-Niconico-Language': 'ja-jp',
        'X-Client-OS-Type': 'others',
    },
};

interface postData {
    subDomain?: string;
    path?: string;
    params?: { [key: string]: string };
}

class ApiClient {
    public protocol: string;
    public baseDomain: string;
    public userAgent: string;
    public header: { [key: string]: string };

    constructor() {
        this.protocol = defaultConfig.protocol;
        this.baseDomain = defaultConfig.baseDomain;
        this.userAgent = defaultConfig.userAgent;
        this.header = defaultConfig.header;
    }

    public post(_url: string, config: postData, data: any = null) {
        let url = this.protocol + '://';
        if (config.subDomain) url += config.subDomain + '.';
        url += this.baseDomain + '/';
        if (config.path) url += config.path;
        url += _url;

        return axios.post(url, data, {
            headers: {
                'User-Agent': this.userAgent,
                ...this.header,
            },
            params: config.params,
        });
    }
}

export default ApiClient;
