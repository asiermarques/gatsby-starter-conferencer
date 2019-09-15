import React from "react"
import { graphql, StaticQuery } from "gatsby"
import LocationMap from "./locationMap"
import Sponsors from "./sponsors"
import Organizers from "./organizers"
import Nav from "./nav"


export default () => (
    <StaticQuery
        query={graphql`
        query {
            site {
              siteMetadata {
                conference_hashtag
                organizers {
                  name,
                  link,
                  image
                },
                footer_links {
                  link,
                  title
                },
                location {
                  gmaps_iframe_url,
                  addresses {
                    name,
                    line,
                    map_link
                  }
                },
                sponsor_blocks{
                  name,
                  height_em,
                  sponsors {
                      name,
                      link,
                      image
                  }
                }
              }
            }
          }
        `}
        render={ data => {

          const configData = data.site.siteMetadata;

          return (
            <footer>
                <LocationMap location={configData.location}/>
        
                <section id="about">
        
                  <div class="container">
        
                      <div class="row">
                            <div class="col-md-7">
                              <Organizers organizers={configData.organizers}/>
                            </div>
        
                            <div class="col-md-5 text-center">
                              <h4>About</h4>
                              <Nav items={configData.footer_links}></Nav>
                            </div>
        
                      </div>
                  </div>
        
                </section>
        
                <Sponsors sponsorBlocks={configData.sponsor_blocks}/>
        
                <section>
                    <div className="container">
                        <hr></hr>
                        Created with the <a href="https://github.com/asiermarques/gatsby-starter-conferencer">Gatsby Conferencer starter</a>
                    </div>
                </section>
        
                        
        
            </footer>
                )


        }}
    />
)