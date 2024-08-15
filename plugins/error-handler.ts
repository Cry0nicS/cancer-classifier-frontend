import type Rollbar from "rollbar";
import type {TODO} from "~/types/utils";
export default defineNuxtPlugin((nuxtApp) => {
    const rollbar = useRollbar() as Rollbar;

    // Hook into Vue's error handler
    nuxtApp.hook("vue:error", (error, instance, info) => {
        rollbar.log(error as TODO, {instance, info});
    });

    // Hook into Nuxt's app error handler
    nuxtApp.hook("app:error", (error) => {
        rollbar.log(error);
    });
});
