interface NicoVideoJPHelloData {
    version: {
        isUpdateRequired: boolean;
        isOsUpdateRequired?: boolean;
    };
}

interface NicoVideoJPUserData {
    user: {
        description: string;
        decoratedDescriptionHtml: string;
        strippedDescription: string;
        isPremium: boolean;
        registeredVersion: string;
        followeeCount: number;
        followerCount: number;
        userLevel: {
            currentLevel: number;
            nextLevelThresholdExperience: number;
            nextLevelExperience: number;
            currentLevelExperience: number;
        };
        userChannel: any; // null
        isNicorepoReadable: boolean;
        sns: NicoVideoJPUserSNSData[];
        coverImage: any; // null
        id: number;
        nickname: string;
        icons: {
            small: string;
            large: string;
        };
    };
    relationships: {
        sessionUser: {
            isFollowing: boolean;
        };
        isMe: boolean;
    };
}

interface NicoVideoJPUserSNSData {
    type: string;
    label: string;
    iconUrl: string;
    screenName: string;
    url: string;
}
