import { NextSeo } from 'next-seo';
import Head from 'next/head'

const Metadata = () => (
  <>
   <NextSeo 
    openGraph={{
      type: 'website',
      url: 'https://seed-library.vercel.app/',
      title: "Seed Library",
      description: "A community for sharing of plant seed in The Netherlands"
    }}
   />
   <Head>
     
   </Head>
  </>
)

export default Metadata;
