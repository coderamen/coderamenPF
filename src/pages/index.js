import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Header from '../components/header'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  )
}

export default IndexPage
