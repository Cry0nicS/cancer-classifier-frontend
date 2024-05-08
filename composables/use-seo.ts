import type {UseSeoMetaInput} from "@unhead/schema";

type twitterCardStyle = "summary" | "summary_large_image" | "app" | "player";

/**
 * This composable adds the relevant SEO tags when seo data is available. It also disables
 * indexing when enable_search_indexing is false.
 *
 * @param title The title of the page. This will be used for the title tag, og:title, and twitter:title.
 * @param description The description of the page. This will be used for the description tag, og:description, and twitter:description.
 * @param imageURL The URL of the image. This will be used for the og:image and twitter:image tags.
 * @param imageAltText The alt text for the image. This will be used for the og:image:alt and twitter:image:alt tags.
 * @param twitterCardStyle The style of the twitter card. This will be used for the twitter:card tag.
 * @param disableSearchIndexing Instruct search engine crawlers to not index and to not follow any links on the page
 */
export function useSeo(
    title: string,
    description: string,
    imageURL?: string,
    imageAltText?: string,
    twitterCardStyle: twitterCardStyle = "summary_large_image",
    disableSearchIndexing = false
) {
    const data: UseSeoMetaInput = {};

    // Title.
    data.title = title;
    data.ogTitle = title;
    data.twitterTitle = title;

    // Description.
    data.description = description;
    data.ogDescription = description;
    data.twitterDescription = description;

    if (imageURL) {
        if (!imageAltText)
            throw new Error("Image alt text is required when an imageURL is provided.");

        data.ogImage = imageURL;
        data.ogImageAlt = imageAltText;

        data.twitterImage = imageURL;
        data.twitterImageAlt = imageAltText;
    }

    data.ogType = "website";
    data.twitterCard = twitterCardStyle ?? "summary_large_image";

    if (disableSearchIndexing) {
        data.robots = "noindex, nofollow";
    }

    useSeoMeta(data);
}
