import {StorageMethod} from "~/types/enums";

// Create a map to associate each storage method ID with its name
export const storageMethodNames: Record<StorageMethod, string> = {
    [StorageMethod.FFPE]: "Formalin-Fixed, Paraffin-Embedded",
    [StorageMethod.FreshFrozen]: "Fresh Frozen",
    [StorageMethod.Other]: "Other"
};

// Function to fetch the name of the storage method based on the key
export function getStorageMethodName(key: StorageMethod): string {
    return storageMethodNames[key];
}
