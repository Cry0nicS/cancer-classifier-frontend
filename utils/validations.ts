import {object, string} from "yup";
import type {ComposerTranslation} from "vue-i18n";

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
        password: string()
            .required(translate("validation.password.required"))
            .label("Password")
            .min(8, translate("validation.password.short"))
    });

export const ForgotPasswordSchema = (translate: ComposerTranslation) =>
    object({
        email: string()
            .required(translate("validation.name.required"))
            .label("Email")
            .email(translate("validation.email.invalid"))
    });
