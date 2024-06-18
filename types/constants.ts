export const UPLOAD_SESSION_KEY = "uploadSessionActive";

export const LOCALE = {
    English: "en",
    German: "de"
} as const;

export type Locale = (typeof LOCALE)[keyof typeof LOCALE];

export const ISO_LOCALE = {
    [LOCALE.English]: "en-US",
    [LOCALE.German]: "de-DE"
} as const;

export type IsoLocale = (typeof ISO_LOCALE)[keyof typeof ISO_LOCALE];

export const STORAGE_METHOD = {
    FFPE: "FFPE",
    Frozen: "Frozen",
    Other: "Other"
} as const;

export type StorageMethod = (typeof STORAGE_METHOD)[keyof typeof STORAGE_METHOD];

export const PLATFORM = {
    EPIC: "EPIC",
    EPICv2: "EPICv2",
    FOUR_FIVE_K: "450k"
} as const;

export type Platform = (typeof PLATFORM)[keyof typeof PLATFORM];

export const UPLOAD_STATUS = {
    CsvUploaded: "csv-uploaded",
    Pending: "pending",
    PredictionRunning: "prediction-running",
    PredictionSuccessful: "prediction-successful",
    PreRunning: "preprocessing-running",
    PreSuccessful: "preprocessing-successful",
    UploadFinished: "files-uploaded",
    UploadPending: "upload-pending"
} as const;

export type UploadStatus = (typeof UPLOAD_STATUS)[keyof typeof UPLOAD_STATUS];

export const PREDICTION_RESULT = {
    PAAD: "PAAD",
    iCCA: "iCCA",
    NormalBile: "normal_bile",
    NoMatch: "no_match"
} as const;

export type PredictionResult = (typeof PREDICTION_RESULT)[keyof typeof PREDICTION_RESULT];

export const BINOMIAL_PREDICTION = {
    Positive: "positive",
    Negative: "negative"
} as const;

export type BinomialPrediction = (typeof BINOMIAL_PREDICTION)[keyof typeof BINOMIAL_PREDICTION];
