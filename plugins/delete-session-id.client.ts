import {SESSION_KEY} from "~/utils/helpers";

/**
 * Nuxt.js plugin to delete the user's active session ID when the tab or browser is closed.
 *
 * This plugin uses the 'beforeunload' event to detect when the tab or browser is being closed.
 * It checks if the session ID is still in the session storage.
 * If it's not, it assumes the tab or browser was closed and deletes the user's active session ID.
 * Session storage is used to avoid deleting the session ID
 * when the user navigates to a different page within the same tab or refreshes the browser.
 *
 * @module delete-session-id.client
 */
export default defineNuxtPlugin((_nuxtApp) => {
    const uploadSessionId = useCookie("uploadSessionId");

    const deleteCookie = () => {
        // Session storage is cleared when the tab or browser is closed.
        // If the session ID is still in the session storage, it means the tab or browser was not closed
        if (!sessionStorage.getItem(SESSION_KEY)) {
            // If not, assume the tab or browser was closed and destroy the user's active session ID.
            uploadSessionId.value = null;
        }
    };

    // Add an event listener for the 'beforeunload' event
    window.addEventListener("beforeunload", deleteCookie);
});
