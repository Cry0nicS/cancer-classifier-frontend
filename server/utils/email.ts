import nodemailer from "nodemailer";

export const createTransporter = () => {
    const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig();

    return nodemailer.createTransport({
        host: config.mailSmtp,
        port: config.mailPort,
        secure: config.appEnv === "production",
        auth: {
            user: config.mailUsername,
            pass: config.mailPassword
        }
    });
};
