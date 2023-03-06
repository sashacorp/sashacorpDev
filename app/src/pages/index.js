import * as React from "react"


import Layout from "../components/ui/layout"
import Seo from "../components/seo"
import { Typography } from "@material-ui/core"




const IndexPage = () => {
  
  return (
  <Layout>
    <Typography variant="h1">
      SASHACORP
    </Typography>
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
