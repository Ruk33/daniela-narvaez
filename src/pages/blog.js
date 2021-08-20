import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Menu from "../components/menu"
import Footer from "../components/footer"

import "@fontsource/playfair-display/700.css"
import "@fontsource/poppins"
import "@fontsource/bevan"

import "../styles/landing.css"

export default function Blog ({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daniela Narvaez - Marketing digital en Tucumán</title>
      </Helmet>
      <Menu />
      <div className="blog hero-container">
        <div className="container hero">
          <div className="content">
            <h5>
                <span className="secondary-color">Blog</span>
            </h5>

            <h1 className="secondary-title">¡Bienvenido a mi Blog!</h1>
            <p>Encontrá recursos gratuitos para mejorar tu conocimiento y posición digital.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          {allMarkdownRemark.nodes.map((post) => (
                <a className="post-entry" href={post.frontmatter.slug} key={post.frontmatter.slug}>
                    <h2>{post.frontmatter.title}</h2>
                    <p>{post.frontmatter.summary}</p>
                </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date}, limit: 10, filter: {frontmatter: {slug: {ne: "/landing"}}}) {
      nodes {
        frontmatter {
          slug,
          title,
          summary
        }
      }
    }
  }  
`