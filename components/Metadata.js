import { NextSeo } from 'next-seo';
import Head from 'next/head'

const Metadata = () => (
  <>
   <NextSeo 
    openGraph={{
      type: 'website',
      url: 'https://seed-library.vercel.app/',
      title: "Seed Library",
      description: "A community for sharing plant seed in The Netherlands",
      images: [
        {
          url: '%PUBLIC_URL%/images/seedlibrary-meta.jpg',
          width: 1200,
          height: 627,
          alt: 'Seedlibrary photo',
        }
      ]
    }}
   />
   <Head>
     
   </Head>
  </>
)

export default Metadata;
