import React from "react"
import { graphql, StaticQuery } from "gatsby"


export default () => (
    <StaticQuery
        query={graphql`
        query {
            site {
                siteMetadata {
                    conference_name, 
                    conference_claim,
                    header_banner {
                        cta_pre_text,
                        cta_text,
                        cta_url
                    }
                }
            }
        }
        `}
        render={ data => (
            <div class="jumbotron">
                <div class="container text-center">
                    <h1 class="display-4">{data.site.siteMetadata.conference_name}</h1>
                    <p class="lead">{data.site.siteMetadata.conference_claim}</p>
                    <hr class="my-4"/>
                    <p>{data.site.siteMetadata.header_banner.cta_pre_text}</p>
                    <a class="btn btn-primary btn-lg" href={data.site.siteMetadata.header_banner.cta_url} role="button">{data.site.siteMetadata.header_banner.cta_text}</a>
                </div>
            </div>
        )}
    />
)