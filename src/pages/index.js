import React from "react"
import Layout from "../components/layout"
import SpeakerCard from "../components/speakerCard"
import Header from "../components/headerBanner"
import Agenda from "../components/agenda"
import { graphql} from "gatsby"


export default ({data}) => <Layout>

    <Header/>
    <div class="container">

        <div id="presentation" class="text-center">
            <h2>{data.site.siteMetadata.home.title} <span>{data.site.siteMetadata.conference_hashtag}</span></h2>
            <p>{data.site.siteMetadata.home.description}</p>
            <p>
                <a href="#agenda">{data.site.siteMetadata.home.agenda_cta_text}</a>
            </p>
            <hr/>
        </div>

        <div id="speakers" class="row">
            {data.site.siteMetadata.speakers.map((speaker, i) => {
                return (<div class="col-4"><SpeakerCard imageUrl={speaker.image} name={speaker.name} company={speaker.company}/></div>)
            })}
        </div>

        <Agenda/>


    </div>

</Layout>

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        conference_hashtag
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
      }
    }
  }
`