type NicoVideoJPVideoInfo = NicoVideoJPRawResponse<NicoVideoJPVideoInfoData>;

interface NicoVideoJPRawResponse<RawData> {
    meta: {
        status: number;
        id?: string;
        errorCode?: string;
        errorMessage?: string;
    };
    data?: RawData;
}

interface nvComment {
    threadKey: string;
    server: string;
    params: {
        targets: ThreadID[];
        language: string;
    };
    language: string;
}

interface ThreadID {
    id: string;
    fork: string;
}
