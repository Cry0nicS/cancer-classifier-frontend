export enum Locale {
    English = "en",
    German = "de"
}

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
    CsvUploaded = "csv-uploaded",
    Pending = "pending",
    PredictionRunning = "prediction-running",
    PredictionSuccessful = "prediction-successful",
    PreRunning = "preprocessing-running",
    PreSuccessful = "preprocessing-successful",
    UploadFinished = "files-uploaded",
    UploadPending = "upload-pending"
}

export enum PredictionResult {
    PAAD = "PAAD",
    iCCA = "iCCA",
    NormalBile = "normal_bile",
    NoMatch = "no_match"
}

export enum BinomialPrediction {
    Positive = "positive",
    Negative = "negative"
}
