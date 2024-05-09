import NicoVideoJP from './NicoVideoJP';
import BaseWrapper from './BaseWrapper';

// https://account.nicovideo.jp/api/v1/users/auth/account_passport
//

class secure_NicoVideoJP extends NicoVideoJP {
    static subDomain = 'account';
    constructor(...args: ConstructorParameters<typeof BaseWrapper>) {
        super(secure_NicoVideoJP.subDomain, ...args);
    }

    async fetchLogin(mailOrTel: string, password: string) {
        const res = await this.post(
            'login/redirector',
            { maxRedirects: 0 },
            {
                mail_tel: mailOrTel,
                password,
            },
        );
        if (res.status !== 302) throw new Error('Something went wrong');
        const location = new URL(res.headers.location as string);
        if (location.searchParams.get('message') === 'cant_login') return false;
        if (location.pathname === '/mfa') {
            return {
                mfa: true,
                /* ... */
            };
        }
        // if
    }

    // async fetchLoginWithMFA() {}

    async fetchMyAccountInfo() {
        const res = await this.get('api/public/v2/user.json', {
            login: true,
        });
        const response = res.data as NicoVideoJPRawResponse<NicoVideoJPAccountInfoData>;
        return response.data;
    }
}

export default secure_NicoVideoJP;
