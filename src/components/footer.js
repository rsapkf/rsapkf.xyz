import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <div style={{ float: 'right' }}>
            <a
            href="https://mastodon.social/@SecretAgentRandyBeans"
            target="_blank"
            rel="noopener noreferrer"
            >
            mastodon
            </a>{' '}
            &bull;{' '}
            <a
            href="https://github.com/rsapkf"
            target="_blank"
            rel="noopener noreferrer"
            >
            github
            </a>{' '}
            &bull;{' '}
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                rss
            </a>
            </div>
            <p>© 2019 {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer