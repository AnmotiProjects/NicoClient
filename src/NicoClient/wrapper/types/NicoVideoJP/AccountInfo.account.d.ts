interface NicoVideoJPAccountInfoData {
    area: string;
    hasPremiumOrStrongerRights: boolean;
    hasSuperPremiumOrStrongerRights: boolean;
    timezone: string;
    existence: {
        residence: {
            country: string;
            prefecture: string;
        };
        birthday: string;
        sex: string;
    };
    description: string;
    language: string;
    locale: string;
    icons: {
        urls: { [key: string]: string | undefined };
    };
    userId: string;
    isExplicitlyLoginable: boolean;
    premium: {
        type: string;
    };
    nickname: string;
    contacts: {
        emails: { [key: string]: NicoVideoJPAccountInfoEmailData };
    };
}

interface NicoVideoJPAccountInfoEmailData {
    address: string;
    is_feature_phone: boolean;
    is_confirmed: boolean;
}
