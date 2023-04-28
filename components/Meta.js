import Head from 'next/dist/next-server/lib/head'
import React from 'react'

const Meta = ({ title, keyword, desc }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={desc} />
      <meta name='keyword' content={keyword} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Real Time Billionaires List',
  keyword: '',
  desc: "Billionaires list updated in real time. The world's richest celebrities and their best quotes: Elon Musk, Jeff Bezos, Roger Federer, rappers, NBA players...",
}

export default Meta