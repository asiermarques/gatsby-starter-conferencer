import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Header from "../components/headerInner"
import Footer from "../components/footer"
import { FaArrowLeft } from 'react-icons/fa'
import { graphql} from "gatsby"


export default function PageTemplate({
    data, 
  }){
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  const title = frontmatter.title
  const configData = data.site.siteMetadata

  return (
    <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Helmet>

        <Header data={configData}/>

        <section>
            <div className="container">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="/"><FaArrowLeft/> back to the home</a>
                    </li>
                </ul>
            </div>
        </section>

        <section id="page">

            <div className="container">

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>

            </div>

        </section>


        <Footer/>

    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        canonical_url,
        conference_hashtag,
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
`