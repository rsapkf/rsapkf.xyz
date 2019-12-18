import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h3><u>Welcome to </u><span className="title">rsapkf</span><u>'s Home Page</u>!</h3>
            <p>I mostly work with [<a href="https://github.com/django/django">Python/Django</a>] and the [<a href="https://www.startpage.com/do/metasearch.pl?query=mern%20stack">MERN Stack</a>]. I also work with [<a href="https://github.com/pallets/flask">Python/Flask</a>], and a few other CSS and JavaScript Libraries and JAMstack Technologies- [<a href="https://github.com/twbs/bootstrap">Bootstrap4</a>], [<a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>].</p>
            <br />
            <p>Please see [<Link to="/tech">Technologies</Link>] section for more info.</p>
            <hr />
            <p>Need a developer? <Link to="/contact">Contact me</Link>.</p>
        </Layout>
    )
}

export default IndexPage
