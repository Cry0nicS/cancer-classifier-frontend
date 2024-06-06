export enum StorageMethod {
    FFPE = "FFPE",
    FreshFrozen = "Frozen",
    Other = "Other"
}

export enum Platform {
    EPIC = "EPIC",
    EPICv2 = "EPICv2",
    FOUR_FIVE_K = "450k"
}

export enum UploadStatus {
    PreFinished = "preprocessing-finished",
    PreRunning = "preprocessing-running",
    UploadPending = "upload-pending",
    Pending = "pending"
}
