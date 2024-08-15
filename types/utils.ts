import type {UPLOAD_STATUS} from "~/types/constants";

// eslint-disable-next-line ts/no-explicit-any
export type TODO = any;

export interface StepperStep {
    order: number;
    icon: string;
    status: StepperStatuses;
    title: string;
    description: string;
}

export type StepperStatuses =
    | typeof UPLOAD_STATUS.UploadPending
    | typeof UPLOAD_STATUS.UploadFinished
    | typeof UPLOAD_STATUS.PreRunning
    | typeof UPLOAD_STATUS.PredictionRunning
    | typeof UPLOAD_STATUS.PredictionSuccessful;

export type StepperStates = "active" | "completed" | "inactive";
