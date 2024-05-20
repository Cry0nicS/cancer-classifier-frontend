import {joinURL} from "ufo";

export default defineEventHandler(async (event) => {
    // Get the proxy URL from RuntimeConfig.
    const proxyUrl = useRuntimeConfig().apiUrl;
    // Replace the "/api/" prefix with an empty string.
    // Therefore, "/api/endpoint" becomes "endpoint".
    const path = event.path.replace(/^\/api\//, "");
    const target = joinURL(proxyUrl, path);

    // Proxy it.
    return proxyRequest(event, target);
});
