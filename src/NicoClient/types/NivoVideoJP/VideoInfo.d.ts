interface NicoVideoJPVideoInfoData {
    ads: any;
    category: any;
    channel: any;
    client: {
        nicosid: string;
        watchId: string;
        watchTrackId: string;
    };
    comment: {
        server: {
            url: any;
        };
        keys: {
            userKey: any;
        };
        layers: NicoVideoJPVideoInfoLayer[];
        threads: NicoVideoJPVideoInfoThread[];
        ng: {
            ngScore: {
                isDisabled: boolean;
            };
            channel: any[];
            owner: any[];
            viewer: any[];
        };
        isAttentionRequired: boolean;
        nvComment: nvComment;
    };
    community: any;
    easyComment: NicoVideoJPVideoInfoEasyComment[];
    external: any;
    genre: NicoVideoJPVideoInfoGenre;
    marquee: any;
    okReasion: string;
    owner: {
        id: number;
        nickname: string;
        iconUrl: string;
        channel: any;
        live: any;
        isVideosPublic: boolean;
        isMylistsPublic: boolean;
        videoLiveNotice: any;
        viewer: any;
    };
    ranking: {
        genre: {
            rank: number;
            genre: string;
            dateTime: string;
        };
        popularTag: NicoVideoJPVideoInfoRankingTag[];
    };
    series: any;
    system: {
        serverTime: string;
        isPeakTime: boolean;
        isStellaAlive: boolean;
    };
    tag: {
        items: NicoVideoJPVideoInfoTagItem[];
        hasR18Tag: boolean;
        isPublishedNicoscript: boolean;
        edit: {
            isEditable: boolean;
            uneditableReason: string;
            editKey: any;
        };
        viewer: any;
    };
    video: {
        id: string;
        title: string;
        description: string;
        count: {
            view: number;
            comment: number;
            mylist: number;
            like: number;
        };
        duration: number;
        thumbnail: { [key: string]: string | undefined } & {
            url?: string;
            middleUrl?: string;
            largeUrl?: string;
            player?: string;
            ogp?: string;
        };
        rating: {
            isAdult: boolean;
        };
        registeredAt: string;
        isPrivate: boolean;
        isDeleted: boolean;
        isNoBanner: boolean;
        isAuthenticationRequired: boolean;
        isEmbedPlayerAllowed: boolean;
        isGiftAllowed: boolean;
        viewer: any;
        watchableUserTypeForPayment: string;
        commentableUserTypeForPayment: string;
    };
}

interface NicoVideoJPVideoInfoGenre {
    key: string;
    label: string;
    isImmoral: boolean;
    isDisabled: boolean;
    isNotSet: boolean;
}

interface NicoVideoJPVideoInfoLayer {
    index: number;
    isTranslatable: boolean;
    threadIds: NicoVideoJPVideoInfoThreadID[];
}

interface NicoVideoJPVideoInfoThreadID {
    id: number;
    fork: number;
    forkLabel: string;
}

interface NicoVideoJPVideoInfoThread extends NicoVideoJPVideoInfoThreadID {
    videoId: string;
    isActive: boolean;
    isDefaultPostTarget: boolean;
    isEasyCommentPostTarget: boolean;
    isLeafRequired: boolean;
    isOwnerThread: boolean;
    isThreadkeyRequired: boolean;
    threadkey: any;
    is184Forced: boolean;
    hasNicoscript: boolean;
    label: string;
    postkeyStatus: number;
    server: any;
}

interface NicoVideoJPVideoInfoEasyComment {
    phrases: NicoVideoJPVideoInfoEasyCommentPhrase[];
}

interface NicoVideoJPVideoInfoEasyCommentPhrase {
    text: string;
    nicodic: {
        title: string;
        viewTitle: string;
        summary: string;
        link: string;
    };
}

interface NicoVideoJPVideoInfoRankingTag {
    tag: string;
    regularizedTag: string;
    rank: number;
    genre: string;
    dateTime: string;
}

interface NicoVideoJPVideoInfoTagItem {
    name: string;
    isCategory: boolean;
    isCategoryCandidate: boolean;
    isNicodicArticleExists: boolean;
    isLocked: boolean;
}
