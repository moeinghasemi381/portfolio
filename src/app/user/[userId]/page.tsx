import {Metadata} from "next";

export async function generateMetadata({params}): Promise<Metadata> {
    const {id} = params;
    const {
        seo_canonical,
        seo_title,
        title,
        seo_description,
        description,
        pdp_poster,
        streaming_link
    } = {
        seo_canonical: 'test1',
        seo_title: 'test1',
        title: 'test1: ' + id,
        seo_description: 'test1',
        description: 'test1',
        pdp_poster: 'test1',
        streaming_link: 'test1',
    }

    return {
        title: seo_title || title,
        description: seo_description || description,
        ...(seo_canonical && {
            alternates: {
                canonical: seo_canonical
            }
        }),
        openGraph: {
            type: 'video.movie',
            url: './',
            title: title,
            description: description,
            images: [
                {
                    url: 'https://image.dorsa.app/medias/DogManOfficialTrailerMOVIE-PDP.webp' || pdp_poster,
                    alt: title || 'Poster Image'
                }
            ],
            videos: [
                {
                    url: streaming_link
                }
            ],
            locale: 'something 1',
            siteName: 'something 2'
        },
        // TODO: double check these parts
        // TODO: start from here
        twitter: {
            title: title,
            description: description,
            card: 'summary_large_image',
            images: [
                {
                    url: 'https://image.dorsa.app/medias/DogManOfficialTrailerMOVIE-PDP.webp',
                    alt: title || 'Poster Image'
                }
            ],
            site: '@dorsa_app',
            url: 'dorsa.app'
        }
    };
}


export default function UserPage() {

    return <>
        <header> this is user page!</header>
        <main>hello from user page</main>
        <footer>footer of user page!</footer>
    </>
}