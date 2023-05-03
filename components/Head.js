import Head from "next/dist/next-server/lib/head";

const SeoHead = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/assets/icons/favicon-onliq.svg" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
    </Head>
  )
}

export default SeoHead