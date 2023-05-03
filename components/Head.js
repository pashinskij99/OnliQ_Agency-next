import Head from "next/head";

const SeoHead = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/assets/icons/favicon-onliq.svg" />
      <meta property="title" content={title} />
      <meta property="description" content={description} />
    </Head>
  )
}

SeoHead.defaultProps = {
  title: 'Onliq.Agency',
  desc: "Onliq.Agency recognizes the significance of dependable management for the progress and expansion of OnlyFans. As the top agency to offer such services, we remain informed and knowledgeable about the most recent developments in this constantly evolving digital environment. Our adept blend of dependable marketing solutions and comprehensive comprehension of the OnlyFans algorithm guarantees that our clients always have an advantage over their rivals.",
}

export default SeoHead