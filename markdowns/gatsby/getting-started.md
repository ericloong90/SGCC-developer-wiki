# Gatsby Introduction

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 64px 0px;">
  <img src="./assets/gatsby-logo.svg" style="width: 400px;"/>
</div>

Gatsby is a modern static site generator, which means there are no servers to setup or complicated databases to employ. It can be compared to other static site generators like Hugo, Jekyll and so on. So what makes it special?

Gatsby can be used to build static sites that are Progressive Web Apps, follow the latest web standards, and are optimized to be highly performant. It makes use of the latest and popular technologies including React.JS, Webpack, GraphQL, modern ES6 + JavaScript and CSS.

Gatsby produces a static folder `public`, ready to deploy onto any static file hosting services like AWS S3, Github Pages, Surge.sh & many more.

Data from **RESTFUL API** calls can be configured to be hydrated either during build time or at client real time. Data from API calls that are configured to be hydrated on build time will be built into the generated static files by Gatsby.

Gatsby also offers a plethora of plugins found [here](https://www.gatsbyjs.org/plugins/). Gatsby plugin library provides many useful plugins, such as [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=) - which converts various types of data into `File` nodes - ready to be transformed into various other types of data types e.g. [gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/?=transformer).

In a nutshell, Gatsby pulls data from various resources and builds it using React and Webpack to create deployable static files.

Gatsby provides functionalities to prefetch resources for other pages so clicking around the site feels incredibly fast.

The following sites are just a couple of the many sites built using Gatsby:

- [ReactJS](https://reactjs.org/)

  ![ReactJS Landing Site](./assets/react-landing.png)

## Installation

Install the `gatsby` CLI tool by using the following command:

```bash
npm install -g gatsby-cli
```

## Creating a New Project

Create a new Gatsby project by using the following command:

```bash
gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
```

This specifies that we are creating a new project called `my-default-starter` using the template from [https://github.com/gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default).
