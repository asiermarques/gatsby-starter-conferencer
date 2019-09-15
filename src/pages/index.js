import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SpeakerCard from "../components/speakerCard"
import Header from "../components/headerHome"
import Agenda from "../components/agenda"
import Footer from "../components/footer"
import { graphql} from "gatsby"


export default ({data}) => {

  const configData = data.site.siteMetadata;

  return <Layout>

    <Helmet>
          <meta charSet="utf-8" />
          <title>{configData.conference_name} {configData.conference_hashtag}</title>
          <link rel="canonical" href="{configData.conference_claim}" />
    </Helmet>

    <Header data={configData}/>

    <div id="content" class="container">

        <section id="presentation" class="text-center">
            <h2>{configData.home.title} <span>{configData.conference_hashtag}</span></h2>
            <p>{configData.home.description}</p>
            <p>
                <a href="#agenda">{configData.home.agenda_cta_text}</a>
            </p>
        </section>

        <section id="speakers" class="row">
            {configData.speakers.map((speaker, i) => {
                return (<div class="col-lg-4 col-sm-6 col-xs-12"><SpeakerCard speaker={speaker}/></div>)
            })}
        </section>

        <Agenda agenda={configData.agenda} speakers={configData.speakers}/>
    </div>

    <Footer/>

  </Layout>
}

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
        header_banner {
          cta_pre_text,
          cta_text,
          cta_url
        }
        speakers {
          slug,
          name,
          image,
          company,
          talk{
              title,
              description
          }
        },
        agenda {
            visible,
            time_slots,
            tracks{ 
                name,
                content_in_slots {
                    type,
                    content
                }
            }
        }
      }
    }
  }
`