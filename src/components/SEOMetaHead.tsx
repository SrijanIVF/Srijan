import { Helmet } from "react-helmet";

const SEOMetaHead = ({ metaData = {} }: any) => {
    return (
        <Helmet>
            <title>
                {metaData?.meta_title || metaData?.title || ""}
            </title>

            <meta
                name="description"
                content={
                    metaData?.metaDescription ||
                    metaData?.meta_description ||
                    ""
                }
            />

            <meta
                name="keywords"
                content={
                    metaData?.metaKeyword ||
                    metaData?.meta_keyword ||
                    ""
                }
            />

            <meta
                name="author"
                content={metaData?.author || ""}
            />

            <meta
                name="robots"
                content={
                    metaData?.robot?.content ||
                    "index, follow"
                }
            />

            {/* Open Graph */}
            <meta
                property="og:title"
                content={
                    metaData?.title ||
                    metaData?.meta_title ||
                    ""
                }
            />

            <meta
                property="og:description"
                content={
                    metaData?.metaDescription ||
                    metaData?.meta_description ||
                    ""
                }
            />

            <meta
                property="og:url"
                content={metaData?.url || ""}
            />

            <meta
                property="og:type"
                content={
                    metaData?.og_type || "website"
                }
            />

            {/* Twitter */}
            <meta
                name="twitter:card"
                content={
                    metaData?.twitter_card ||
                    "summary_large_image"
                }
            />

            <meta
                name="twitter:title"
                content={
                    metaData?.title ||
                    metaData?.meta_title ||
                    ""
                }
            />

            <meta
                name="twitter:description"
                content={
                    metaData?.metaDescription ||
                    metaData?.meta_description ||
                    ""
                }
            />

            {/* Canonical */}
            {metaData?.canonical_url && (
                <link
                    rel="canonical"
                    href={metaData.canonical_url}
                />
            )}
        </Helmet>
    );
};

export default SEOMetaHead;