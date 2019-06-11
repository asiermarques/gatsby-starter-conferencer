import React from "react"
import Layout from "../components/layoutHome"
import SpeakerCard from "../components/speakerCard"
import { graphql} from "gatsby"


export default ({data}) => <Layout>

    <div class="container">
        <div class="row">
            {data.site.siteMetadata.speakers.map((speaker, i) => {
                console.log("Entered");
                // Return the element. Also pass key
                return (<div class="col-4"><SpeakerCard imageUrl={speaker.image} name={speaker.name} company={speaker.company}/></div>)
            })}
        </div>
    </div>

</Layout>

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
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