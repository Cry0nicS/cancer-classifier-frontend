import type {StepperStatuses} from "~/types/utils";
import {UPLOAD_STATUS} from "~/types/constants";

export const useUploadStepperStatus = () =>
    useState<StepperStatuses>("stepperStatus", () => UPLOAD_STATUS.UploadPending);
