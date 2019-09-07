import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SpeakerCard from "../components/speakerCard"
import Header from "../components/headerHome"
import Agenda from "../components/agenda"
import Footer from "../components/footer"
import { graphql} from "gatsby"


export default ({data}) => <Layout>

    <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.conference_name} {data.site.siteMetadata.conference_hashtag}</title>
          <link rel="canonical" href="{data.site.siteMetadata.conference_claim}" />
    </Helmet>
    <Header/>
    <div id="content" class="container">

        <section id="presentation" class="text-center">
            <h2>{data.site.siteMetadata.home.title} <span>{data.site.siteMetadata.conference_hashtag}</span></h2>
            <p>{data.site.siteMetadata.home.description}</p>
            <p>
                <a href="#agenda">{data.site.siteMetadata.home.agenda_cta_text}</a>
            </p>
        </section>

        <section id="speakers" class="row">
            {data.site.siteMetadata.speakers.map((speaker, i) => {
                return (<div class="col-lg-4 col-sm-6 col-xs-12"><SpeakerCard speaker={speaker}/></div>)
            })}
        </section>

        <Agenda/>
    </div>

    <Footer/>

</Layout>

export const query = graphql`
  query HomePageQuery {
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
        speakers {
            slug,
            image,
            name,
            company
        }
        organizers {
          name
          link
          image
        }
      }
    }
  }
`