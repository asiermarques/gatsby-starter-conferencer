import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Sponsors from "./sponsors"


export default () => (
    <StaticQuery
        query={graphql`
        query {
            site {
              siteMetadata {
                canonical_url,
                conference_hashtag,
                conference_name,
                conference_claim,
                gmaps_iframe_url,
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
                  name,
                  link,
                  image
                }
              }
            }
          }
        `}
        render={ data => (
<footer>
        <section id="where">
            <h2 class="text-center">Location</h2>
            <div>
              <iframe src={data.site.siteMetadata.gmaps_iframe_url}
              width="100%" 
              height="550" 
              frameborder="0" 
              allowfullscreen="false"></iframe>
            </div>
        </section>

        <section id="about">

          <div class="container">

              <div class="row">
                    <div class="col-md-7">

                      <h3>Organizers</h3>
                      <div class="row justify-content-start">
                        {data.site.siteMetadata.organizers.map( organizer => 
                            <div class="col-6 col-md-3">
                                <a href={organizer.link} title={organizer.name} 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={organizer.image} alt={organizer.name}  class="img-thumbnail"/>
                                </a>
                            </div>
                        )}
                    </div>
                    </div>

                    <div class="col-md-5 text-center">

                      <h4>About</h4>
                      <ul className="nav flex-column">
                          <li className="nav-item"><a href="/code-of-conduct" className="nav-link">Code of conduct</a></li>
                      </ul>

                    </div>

              </div>
          </div>

        </section>

        <Sponsors/>

        <section>
            <div className="container">
                <hr></hr>
                Made with the <a href="https://github.com/asiermarques/gatsby-starter-conferencer">Gatsby Conferencer starter</a>
            </div>
        </section>

                

    </footer>
        )}
    />
)