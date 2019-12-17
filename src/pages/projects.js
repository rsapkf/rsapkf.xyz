import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <u>
        <h3>Projects</h3>
      </u>
      I'm working on a few projects that aren't yet ready to be launched. All
      projects will be open sourced upon release. Please follow via{" "}
      <a href="/rss.xml">RSS</a> to get notified.
      <br />
      <br />
      <p>
        For other smaller projects that I'm working on, see my{" "}
        <a href="https://github.com/rsapkf">GitHub</a> profile:
      </p>
      <ul
        style={{
          fontFamily: "Open Sans",
        }}
      >
        <li>
          [
          <a href="https://github.com/rsapkf/goodies">
            <b>rsapkf/goodies</b>
          </a>
          ]: Collection of GitHub repos, blogs and websites to learn cool
          things.
          <br />[
          <a href="https://rsapkf.github.io/goodies">
            <b>Official Website</b>
          </a>
          (built with Rust and mdBook)]
          <br /> [
          <a href="https://goodies.gitbook.io/goodies">
            <b>GitBook</b>
          </a>
          ]
          <br />
          <object data="https://img.shields.io/github/stars/rsapkf/goodies?label=Star&amp;style=social"></object>
        </li>
        <li>
          [
          <a href="https://github.com/rsapkf/gnureadline-reference">
            <b>rsapkf/gnureadline-reference</b>
          </a>
          ]: A Comprehensive Reference Sheet for GNU Readline Library shortcuts
          for VI + Emacs Editing Modes.
          <br />[
          <a href="https://gnureadline-reference.herokuapp.com/">
            <b>Website</b>
          </a>
          ]
          <br />
          <object data="https://img.shields.io/github/stars/rsapkf/gnureadline-reference?label=Star&amp;style=social"></object>
        </li>
        <li>
          [
          <a href="https://github.com/rsapkf/dotfiles">
            <b>rsapkf/dotfiles</b>
          </a>
          ]: My Dev Environment.
          <br />
          <object data="https://img.shields.io/github/stars/rsapkf/dotfiles?label=Star&amp;style=social"></object>
        </li>
      </ul>
    </Layout>
  )
}

export default ProjectsPage
