import {render} from "@vue-email/render";
import type {InferType} from "yup";
import {object, string} from "yup";
import AccountCreated from "~/components/templates/account-created.vue";
import {createTransporter} from "~/server/utils/email";

const userDataSchema = object({
    userName: string().required(),
    userDescription: string().required(),
    userEmail: string().email().required(),
    userId: string().required()
});

type UserData = InferType<typeof userDataSchema>;

const generateEmailOptions = async (
    data: UserData,
    userAccountValidationUrl: string,
    to: string
) => {
    const template = await render(
        AccountCreated,
        {
            userName: data.userName,
            userDescription: data.userDescription,
            validationUrl: `${userAccountValidationUrl}${data.userId}`
        },
        {pretty: true}
    );

    return {
        from: data.userEmail,
        to,
        subject: `${data.userName} created an account`,
        html: template
    };
};

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const userAccountValidationUrl = runtimeConfig.userAccountValidationUrl;
    const adminEmailAddress = runtimeConfig.mailAdminAddress;

    try {
        const data = await readValidatedBody(event, (body) => userDataSchema.validate(body));

        const transporter = createTransporter();
        const mailOptions = await generateEmailOptions(
            data,
            userAccountValidationUrl,
            adminEmailAddress
        );

        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw createError({
            statusMessage: "Failed to send email",
            data: {details: error}
        });
    }

    return {message: "Email sent"};
});
