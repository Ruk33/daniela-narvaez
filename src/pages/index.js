import * as React from "react"
import { graphql } from "gatsby"
import Menu from "../components/menu"
import Footer from "../components/footer"

import "@fontsource/playfair-display/700.css"
import "@fontsource/poppins"
import "@fontsource/bevan"

import "@fortawesome/fontawesome-free/js/all"

import "../styles/landing.css"

export default function LandingPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <>
      <Menu />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/landing" } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`