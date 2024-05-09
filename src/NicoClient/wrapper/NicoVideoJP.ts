import { AxiosRequestConfig } from 'axios';
import BaseWrapper from './BaseWrapper';

interface NicoVideoJPRequestConfig extends AxiosRequestConfig {
    path?: string;
    defaultHeaders?: boolean;
    login?: boolean;
}

class NicoVideoJP extends BaseWrapper {
    public protocol: string = 'https';
    public subDomain: string;
    public baseDomain: string = 'nicovideo.jp';
    public get baseURL(): string {
        let url = this.protocol + '://';
        url += this.subDomain + '.';
        url += this.baseDomain + '/';
        return url;
    }
    public header: { [key: string]: string } = {
        // 'Content-Type': 'text/plain;charset=UTF-8',
        'X-Frontend-Id': '2',
        'X-Frontend-Version': '9.46',
        'X-Niconico-Language': 'ja-jp',
        'X-Client-Os-Type': 'others',
    };

    constructor(subDomain: string, ...args: ConstructorParameters<typeof BaseWrapper>) {
        super(...args);
        this.subDomain = subDomain;
    }

    protected method(config: NicoVideoJPRequestConfig) {
        const headers: { [key: string]: string } = {
            'User-Agent': this.userAgent,
        };
        if (config.defaultHeaders) {
            Object.assign(headers, this.header);
        }
        if (config.headers) {
            Object.assign(headers, config.headers);
        }
        if (config.login && this.sessionID) {
            headers.Cookie = `user_session=${this.sessionID}`;
        }
        return this.axios({
            ...config,
            baseURL: this.baseURL + (config.path || ''),
            headers,
        });
    }

    protected get(url: string, config: NicoVideoJPRequestConfig) {
        return this.method({
            ...config,
            method: 'GET',
            url,
        });
    }

    protected post(url: string, config: NicoVideoJPRequestConfig, data: any = null) {
        return this.method({
            ...config,
            method: 'POST',
            url,
            data,
        });
    }
}

export default NicoVideoJP;
