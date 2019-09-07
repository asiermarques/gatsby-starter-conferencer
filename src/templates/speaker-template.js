import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Header from "../components/headerBanner"
import Footer from "../components/footer"
import { FaArrowLeft, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { graphql} from "gatsby"

const SpeakerTemplate = context => {
  const speaker = context.pageContext.speaker;
  return (
    <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>{speaker.name}</title>
        </Helmet>

        <Header/>

        <section>
            <div className="container">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="/#agenda"><FaArrowLeft/> back to the agenda</a>
                    </li>
                </ul>
            </div>
        </section>

        <section id="speaker-detail">

            <div className="container">

                <div class="media">
                    <img src={speaker.image} alt={speaker.name}/>
                    <div class="media-body">
                        <h4 class="mt-0">{speaker.name}</h4>
                        <h5>{speaker.company}</h5>
                        <p>{speaker.bio}</p>    
                    </div>
                </div>

            </div>

        </section>


        <Footer/>

    </Layout>
  )
}
export default SpeakerTemplate