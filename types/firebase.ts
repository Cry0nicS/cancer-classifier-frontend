export type Upload = {
    status: "upload-pending" | "finished" | "uploaded" | "error";
    user_id: string;
    paired_files: string[];
};

export type UploadDocument = {
    id: string;
    data: Upload;
};
