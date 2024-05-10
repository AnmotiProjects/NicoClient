import NicoClient from './NicoClient';
import Base from './Base';

interface NicoClientVideoUser {
    id: number;
    nickname: string;
    iconURL: string;
    live?: NicoVideoJPVideoInfoOwnerLiveData;
    isVideosPublic: boolean;
    isMylistsPublic: boolean;
}

interface NicoClientVideoChannel {
    id: string;
    name: string;
    isOfficialAnime: boolean;
    isDisplayAdBanner: boolean;
    thumbnail: {
        url: string;
        smallUrl: string;
    };
}

interface NicoClientVideoTagData {
    isCategory: boolean;
    isCategoryCandidate: boolean;
    isNicoDicArticleExists: boolean;
    isLocked: boolean;
}

interface NicoClientVideoRankingGenre {
    rank: number;
    genre: string;
    date: Date;
}

interface NicoClientVideoRankingTag extends NicoClientVideoRankingGenre {
    tag: string;
    regularizedTag: string;
}

interface NicoClientVideoSystemData {
    serverDate: string;
    isPeakTime: boolean;
    isStellaAlive: boolean;
}

class Video extends Base {
    public readonly actionTrackID: string;
    public readonly nvComment: nvComment;
    public readonly nicosID: string;

    public readonly videoID: string;
    public readonly title: string;
    public readonly description: string;
    public readonly registeredAt: Date;
    public readonly duration: number;
    public readonly viewCount: number;
    public readonly commentCount: number;
    public readonly mylistCount: number;
    public readonly likeCount: number;

    public readonly owner?: NicoClientVideoUser;
    public readonly channel?: NicoClientVideoChannel;
    public readonly genre: NicoVideoJPVideoInfoGenre;
    public readonly thumbnail: NicoVideoJPVideoInfoData['video']['thumbnail'];
    public readonly tags: Map<string, NicoClientVideoTagData>;
    // public readonly tagEdit: NicoClientVideoTagEdit <- not implemented
    //                          ^ uneditableReason, editKey, etc.
    public readonly hasR18Tag: boolean;
    public readonly genreRanking?: NicoClientVideoRankingGenre;
    public readonly tagsRanking: NicoClientVideoRankingTag[];
    // public readonly series: any | undefined;

    public readonly isPrivate: boolean;
    public readonly isDeleted: boolean;
    public readonly isNoBanner: boolean;
    public readonly isAuthenticationRequired: boolean;
    public readonly isEmbedPlayerAllowed: boolean;
    public readonly isGiftAllowed: boolean;
    public readonly isAdult: boolean;
    // public readonly isTagEditable: boolean;
    public readonly isPublishedNicoScript: boolean;

    public readonly system: NicoClientVideoSystemData;

    public raw: NicoVideoJPVideoInfoData;

    constructor(client: NicoClient, data: NicoVideoJPVideoInfoData) {
        super(client);

        this.actionTrackID = data.client.watchTrackId;
        this.nvComment = data.comment.nvComment;
        this.nicosID = data.client.nicosid;

        this.videoID = data.video.id;
        this.title = data.video.title;
        this.description = data.video.description;
        this.registeredAt = new Date(data.video.registeredAt);
        this.duration = data.video.duration;
        this.viewCount = data.video.count.view;
        this.commentCount = data.video.count.comment;
        this.mylistCount = data.video.count.mylist;
        this.likeCount = data.video.count.like;

        if (data.owner !== null) {
            const { id, nickname, iconUrl, live, isVideosPublic, isMylistsPublic } = data.owner;
            this.owner = { id, nickname, iconURL: iconUrl, isVideosPublic, isMylistsPublic };
            if (live !== null) {
                this.owner.live = live;
            }
        }
        if (data.channel !== null) {
            const { id, name, isOfficialAnime, isDisplayAdBanner, thumbnail } = data.channel;
            this.channel = { id, name, isOfficialAnime, isDisplayAdBanner, thumbnail };
        }
        this.genre = data.genre;
        this.thumbnail = data.video.thumbnail;
        this.tags = new Map();
        data.tag.items.forEach(tag => {
            this.tags.set(tag.name, {
                isCategory: tag.isCategory,
                isCategoryCandidate: tag.isCategoryCandidate,
                isNicoDicArticleExists: tag.isNicodicArticleExists,
                isLocked: tag.isLocked,
            });
        });
        // this.tagEdit = <>;
        this.hasR18Tag = data.tag.hasR18Tag;
        if (data.ranking.genre !== null) {
            this.genreRanking = {
                rank: data.ranking.genre.rank,
                genre: data.ranking.genre.genre,
                date: new Date(data.ranking.genre.dateTime),
            };
        }
        this.tagsRanking = data.ranking.popularTag.map(tag => ({
            tag: tag.tag,
            regularizedTag: tag.regularizedTag,
            rank: tag.rank,
            genre: tag.genre,
            date: new Date(tag.dateTime),
        }));
        // this.series = data.series<>

        this.isPrivate = data.video.isPrivate;
        this.isDeleted = data.video.isDeleted;
        this.isNoBanner = data.video.isNoBanner;
        this.isAuthenticationRequired = data.video.isAuthenticationRequired;
        this.isEmbedPlayerAllowed = data.video.isEmbedPlayerAllowed;
        this.isGiftAllowed = data.video.isGiftAllowed;
        this.isAdult = data.video.rating.isAdult;
        // this.isTagEditable = data.tag.edit.isEditable;
        this.isPublishedNicoScript = data.tag.isPublishedNicoscript;

        this.system = {
            serverDate: data.system.serverTime,
            isPeakTime: data.system.isPeakTime,
            isStellaAlive: data.system.isStellaAlive,
        };

        this.raw = data;
    }
}

export default Video;
