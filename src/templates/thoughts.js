import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        lastupdated(formatString: "MMMM DD, YYYY")
      }
      html
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Thought = props => {
  const { title, date, lastupdated } = props.data.markdownRemark.frontmatter

  return (
    <Layout>
      <Head title={`${title} • Thought`} />
      <h3>{title}</h3>
      <small>
        <i className="far fa-calendar"></i> {date} |{" "}
        <i className="fas fa-stopwatch"></i>{" "}
        {props.data.markdownRemark.timeToRead} min read |{" "}
        <i className="fas fa-link"></i>{" "}
        <Link
          to={`${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`}
          style={{ borderBottom: "unset" }}
        >
          permalink
        </Link>
      </small>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <small>
        <i>Last Updated: {lastupdated}</i>
      </small>
      <hr />
      <br />
      <span style={{ marginTop: "20px" }}>
        Got suggestions or feedback ? <Link to="/contact">Contact</Link> me!
      </span>
    </Layout>
  )
}

export default Thought