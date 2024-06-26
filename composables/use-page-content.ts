import type {Locale} from "~/types/constants";

/**
 * Composable to retrieve page content via nuxt-content module.
 *
 * This composable provides a method to fetch the content of a specific page
 * from the Nuxt content module. The page name and locale are used to build
 * the path to the content file.
 */
export function usePageContent(pageName: string, locale: Locale) {
    const route = useRoute();

    const fetchLocalizedContent = async () => {
        const {data: pageData} = await useAsyncData(`nuxt-content:${route.fullPath}`, () =>
            queryContent(`/${locale}/${pageName}`).findOne()
        );

        return pageData;
    };

    return {fetchLocalizedContent};
}
