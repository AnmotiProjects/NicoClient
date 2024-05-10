interface NicoVideoJPVideoInfoData {
    ads: any | null;
    category: any | null;
    channel: NicoVideoJPVideoInfoChannelData | null;
    client: {
        nicosid: string;
        watchId: string;
        watchTrackId: string;
    };
    comment: {
        server: {
            url: string | null;
        };
        keys: {
            userKey: string | null;
        };
        layers: NicoVideoJPVideoInfoLayer[];
        threads: NicoVideoJPVideoInfoThread[];
        ng: {
            ngScore: {
                isDisabled: boolean;
            };
            channel: any[];
            owner: any[];
            viewer: any[] | null;
        };
        isAttentionRequired: boolean;
        nvComment: nvComment;
    };
    community: any | null;
    easyComment: NicoVideoJPVideoInfoEasyComment[];
    external: any | null;
    genre: NicoVideoJPVideoInfoGenre;
    marquee: any | null;
    media: {
        domand: {
            videos: any[];
            audios: any[];
            isStoryboardAvailable: boolean;
            accessRightKey: string;
        };
        delivery: any | null;
        deliveryLegacy: any | null;
    };
    okReasion: string;
    owner: NicoVideoJPVideoInfoOwnerData | null;
    payment: {
        video: {
            isPpv: boolean;
            isAdmission: boolean;
            isContinuationBenefit: boolean;
            isPremium: boolean;
            watchableUserType: string;
            billingType: string;
        };
        preview: {
            ppv: {
                isEnabled: boolean;
            };
            admission: {
                isEnabled: boolean;
            };
            continuationBenefit: {
                isEnabled: boolean;
            };
            premium: {
                isEnabled: boolean;
            };
        };
    };
    pcWatchPage: any | null;
    player: {
        initialPlayback: any | null;
        comment: {
            isDefaultInvisible: boolean;
        };
        layerMode: number;
    };
    ppv: any | null;
    ranking: {
        genre: NicoVideoJPVideoInfoRankingGenre | null;
        popularTag: NicoVideoJPVideoInfoRankingTag[];
    };
    series: any | null;
    smartphone: any | null;
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
            editKey: any | null;
        };
        viewer: any | null;
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
        thumbnail: {
            url: string;
            middleUrl: string;
            largeUrl: string;
            player: string;
            ogp: string;
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
        viewer: any | null;
        watchableUserTypeForPayment: string;
        commentableUserTypeForPayment: string;
        '9d091f87': boolean;
    };
    videoAds: {
        additionalParams: {
            videoId: string;
            videoDuration: number;
            isAdultRatingNG: boolean;
            isAuthenticationRequired: boolean;
            isR18: boolean;
            nicosid: string;
            lang: string;
            watchTrackId: string;
            channelId?: string;
            genre?: string;
        };
        items: any[];
        reason: string | null;
    };
    videoLive: any | null;
    viewer: any | null;
    waku: {
        information: any | null;
        bgImages: any[];
        addContents: any | null;
        addVideo: any | null;
        tagRelatedBanner: NicoVideoJPVideoInfoWakuTagRelatedBannerData | null;
        tagRelatedMarquee: any | null;
    };
}

interface NicoVideoJPVideoInfoChannelData {
    id: string;
    name: string;
    isOfficialAnime: boolean;
    isDisplayAdBanner: boolean;
    thumbnail: {
        url: string;
        smallUrl: string;
    };
    viewer: any | null;
}

interface NicoVideoJPVideoInfoOwnerData {
    id: number;
    nickname: string;
    iconUrl: string;
    channel: any | null;
    live: NicoVideoJPVideoInfoOwnerLiveData | null;
    isVideosPublic: boolean;
    isMylistsPublic: boolean;
    videoLiveNotice: any | null;
    viewer: any | null;
}

interface NicoVideoJPVideoInfoOwnerLiveData {
    id: string;
    title: string;
    url: string;
    begunAt: string;
    isVideoLive: boolean;
    videoLiveOnAirStartTime: any | null;
    thumbnailUrl: any | null;
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
    isTranslucent: boolean;
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
    threadkey: string | null;
    is184Forced: boolean;
    hasNicoscript: boolean;
    label: string;
    postkeyStatus: number;
    server: string | null;
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

interface NicoVideoJPVideoInfoRankingGenre {
    rank: number;
    genre: string;
    dateTime: string;
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

interface NicoVideoJPVideoInfoWakuTagRelatedBannerData {
    title: string;
    imageUrl: string;
    description: string;
    isEvent: boolean;
    linkUrl: string;
    linkType: string;
    linkOrigin: string;
    isNewWindow: boolean;
}
