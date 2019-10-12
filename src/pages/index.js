import React from "react"

import Layout from "../components/Layout"
import EntryList from "../components/EntryList"
import GHCorner from 'react-gh-corner';

const data = require("../../data/data.json")

const IndexPage = () => {
  return (
    <Layout>
      <GHCorner href="https://github.com/deamme/usecrypto" />
      <h1 className="title">Use Crypto</h1>
      <EntryList entries={data} />
    </Layout>
  )
}

export default IndexPage
