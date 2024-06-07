import type {Platform, StorageMethod, UploadStatus} from "~/types/enums";

export type UserCollection = {
    id: string;
    file_list: FileList[];
    status: UploadStatus;
    user_id: string;
    sample_sheet_EPIC?: string;
};

export type FileList = {
    baseName: string;
    material?: StorageMethod;
    platform: Platform;
};
