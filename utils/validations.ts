import {array, mixed, object, string} from "yup";
import type {ComposerTranslation} from "vue-i18n";
import {Platform, StorageMethod} from "~/types/enums";

// Rules: min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const RegisterSchema = (translate: ComposerTranslation) =>
    object({
        name: string()
            .required(translate("validation.name.required"))
            .label("Name")
            .min(3, translate("validation.name.short"))
            .max(50, translate("validation.name.long")),
        email: string()
            .required(translate("validation.email.required"))
            .label("Email")
            .email(translate("validation.email.invalid")),
        password: string()
            .required(translate("validation.password.required"))
            .label("Password")
            .min(8, translate("validation.password.short"))
            .matches(passwordRules, translate("validation.password.weak"))
    });

export const LoginSchema = (translate: ComposerTranslation) =>
    object({
        email: string()
            .required(translate("validation.name.required"))
            .label("Email")
            .email(translate("validation.email.invalid")),
        password: string().required(translate("validation.password.required")).label("Password")
    });

export const ForgotPasswordSchema = (translate: ComposerTranslation) =>
    object({
        email: string()
            .required(translate("validation.name.required"))
            .label("Email")
            .email(translate("validation.email.invalid"))
    });

export const DropFileSchema = (translate: ComposerTranslation) =>
    object().shape({
        files: array()
            .of(
                mixed()
                    // Validate file type (.idat).
                    .test({
                        name: "fileType",
                        message: translate("validation.file.type"),
                        test: (value: unknown) => {
                            if (!value || !(value instanceof File)) {
                                return false;
                            }
                            const fileExtension = value.name.split(".").pop()?.toLowerCase();
                            return fileExtension === "idat";
                        }
                    })
                    // Validate file size.
                    .test({
                        name: "fileSize",
                        message: translate("validation.file.size"),
                        test: (value) =>
                            value && value instanceof File && value.size <= 30 * 1024 * 1024 // 30 MB
                    })
            )
            .max(2, translate("validation.file.maxFiles"))
    });

export const StorageMethodSchema = (translate: ComposerTranslation) =>
    object().shape({
        fileList: array().of(
            object({
                baseName: string().required(),
                platform: mixed()
                    .oneOf(
                        [Platform.EPIC, Platform.EPICv2, Platform.FOUR_FIVE_K],
                        translate("validation.platform.invalid")
                    )
                    .required(),
                material: mixed()
                    .oneOf(
                        [StorageMethod.FFPE, StorageMethod.FreshFrozen, StorageMethod.Other],
                        translate("validation.storageMethod.invalid")
                    )
                    .required(translate("validation.storageMethod.required"))
            })
        )
    });
