import Head from 'next/head'
import React from 'react'

const index = ({ title }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
    </Head>
  )
}

export default index