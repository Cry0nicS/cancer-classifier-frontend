import {Locale, Platform, StorageMethod, UploadStatus} from "~/types/enums";

export const SESSION_KEY = "uploadSessionActive";

// Create a map to associate each storage method ID with its name
export const storageMethodNames: Record<StorageMethod, string> = {
    [StorageMethod.FFPE]: "Formalin-Fixed, Paraffin-Embedded",
    [StorageMethod.FreshFrozen]: "Fresh Frozen",
    [StorageMethod.Other]: "Other"
};

// Create a map to associate each platform ID with its name
export const PlatformNames: Record<Platform, string> = {
    [Platform.EPIC]: "EPIC",
    [Platform.EPICv2]: "EPICv2",
    [Platform.FOUR_FIVE_K]: "450k"
};

// Create a map to associate each platform ID with its name
export const UploadStatusNames: Record<UploadStatus, string> = {
    [UploadStatus.CsvUploaded]: "Documents uploaded",
    [UploadStatus.Pending]: "Pending",
    [UploadStatus.PredictionReady]: "Prediction ready",
    [UploadStatus.PreRunning]: "Preprocessing running",
    [UploadStatus.PreSuccessful]: "Preprocessing successful",
    [UploadStatus.UploadFinished]: "Files uploaded",
    [UploadStatus.UploadPending]: "Upload pending"
};

// Generic function to fetch the name of an enum value based on the key
export function getEnumName<T extends Record<string, string | number | symbol>>(
    enumMap: Record<T[keyof T], string>,
    key: T[keyof T]
): string {
    return enumMap[key];
}

export const LocaleIsoMap = {
    [Locale.English]: "en-US",
    [Locale.German]: "de-DE"
};
