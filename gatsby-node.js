const path = require(`path`);
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const filesystem_result = await graphql(
    `
    {
        allMarkdownRemark(limit: 1000) {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        }
    }
    `
    )
    if (filesystem_result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query over filesystem.`)
        return
    }

    const pageTemplate = path.resolve(`src/templates/page-template.js`)
    filesystem_result.data.allMarkdownRemark
        .edges.forEach(({ node }) => {
            const path = node.frontmatter.path
            createPage({
            path,
            component: pageTemplate,
            context: {
                path,
            },
        })
    })

    const result = await graphql(
    `
    {
    site {
        siteMetadata {
        canonical_url,
        conference_hashtag,
        conference_name,
        conference_claim
        home {
            title
            description
            agenda_cta_text
        }
        header_banner {
          cta_pre_text,
          cta_text,
          cta_url
        }
        speakers {
            slug,
            image,
            name,
            bio,
            company,
            social {
                twitter,
                linkedin,
                github
            }
                talk{
                title,
                description
            }
        }
        }
    }
    }
    `
    )
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query for generating speaker pages.`)
      return
    }

    const speakerTemplate = path.resolve(`src/templates/speaker-template.js`)
    const configData = result.data.site.siteMetadata
    configData.speakers.forEach( speaker  => {
                createPage({
                    path: speaker.slug,
                    component: speakerTemplate,
                    context: {
                        speaker,
                        configData
                    },
                })
            }
    )
  }