import type {Platform, StorageMethod, UploadStatus} from "~/types/constants";

export type UserCollection = {
    id: string;
    file_list: FileList[];
    status: UploadStatus;
    sessionStartedAt: string;
    user_id: string;
    sample_sheet_EPIC?: string;
};

export type FileList = {
    baseName: string;
    material?: StorageMethod;
    platform: Platform;
} & PredictionResult;

export type PredictionResult = {
    BinomialScorePositive?: number;
    NNScoreNormalBile?: number;
    NNScorePaad?: number;
    NNScoreiCCA?: number;
    binomial_prediction?: string;
    prediction?: string;
};
