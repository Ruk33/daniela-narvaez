import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Menu from "../components/menu"
import Footer from "../components/footer"

import "@fontsource/playfair-display/700.css"
import "@fontsource/poppins"
import "@fontsource/bevan"

import "../styles/landing.css"

import avatarSrc from "../images/daniela-narvaez-avatar.png"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daniela Narvaez - Marketing digital en Tucumán</title>
      </Helmet>
      <Menu />
      <div className="container">
        <div className="section">
          <h1 className="primary-title text-big m-0">{frontmatter.title}</h1>
          <h3 className="m-0 primary-color">{frontmatter.date}</h3>
          <div className="blog-post-content">
            <img src={avatarSrc} alt="Daniela Narvaez" className="avatar" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`