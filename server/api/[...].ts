import {joinURL} from "ufo";

export default defineEventHandler(async (event) => {
    try {
        // Get the proxy URL from RuntimeConfig.
        const proxyUrl = useRuntimeConfig().apiUrl;
        // Replace the "/api/" prefix with an empty string.
        // Therefore, "/api/endpoint" becomes "endpoint".
        const path = event.path.replace(/^\/api\//, "");
        const target = joinURL(proxyUrl, path);

        // Proxy it.
        return proxyRequest(event, target);
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            data: {details: error}
        });
    }
});
