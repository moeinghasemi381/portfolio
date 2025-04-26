// @ts-nocheck
import {Metadata} from "next";
import {headers} from "next/headers";
import isCrawler from "@/helpers/isCrawler";

export async function generateMetadata({params}: any): Promise<Metadata> {

    const userAgent = await headers().get('user-agent');

    console.log('user agent: ', userAgent);

    if (isCrawler(userAgent)) {
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
            seo_canonical: 'test2',
            seo_title: 'test2',
            title: 'test2: ' + id,
            seo_description: 'test2',
            description: 'test2',
            pdp_poster: 'test2',
            streaming_link: 'test2',
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
    } else {
        return {};
    }
}


export default function UserPage() {

    return <>
        <header> this is user page!</header>
        <main>hello from user page</main>
        <footer>footer of user page!</footer>
    </>
}