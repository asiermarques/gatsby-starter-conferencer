import React from "react"
import { graphql, StaticQuery } from "gatsby"


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
                  name
                  link
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

        <section id="who">

          <div class="container">

              <div class="row">
                    <div class="col-md-8">

                      <h3>Organizers</h3>
                      <div class="organization-people row">
                        {data.site.siteMetadata.organizers.map( organizer => 
                            <div class="col-sm-3 col-xs-6">
                                <a href={organizer.link} title={organizer.name} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="thumbnail">
                                    <img src={organizer.image} alt={organizer.name}/>
                                </a>
                            </div>
                        )}
                    </div>
                    </div>

                    <div class="col-md-4">

                      <h4>About</h4>
                      <ul>
                          <li><a href="/code-of-conduct">Code of conduct</a></li>
                      </ul>

                    </div>

              </div>
          </div>

        </section>

        <section id="sponsors">

            <h2 class="text-center">Sponsors</h2>

        </section>
    </footer>
        )}
    />
)