import React from "react"
import { graphql, StaticQuery } from "gatsby"
import {LocationMap} from "./locationMap"
import {Sponsors} from "./sponsors"
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
                }
              }
            }
          }
        `}
        render={ data => (
    <footer>
        <LocationMap/>

        <section id="about">

          <div class="container">

              <div class="row">
                    <div class="col-md-7">
                      <Organizers items={data.site.siteMetadata.organizers}/>
                    </div>

                    <div class="col-md-5 text-center">
                      <h4>About</h4>
                      <Nav items={data.site.siteMetadata.footer_links}></Nav>
                    </div>

              </div>
          </div>

        </section>

        <Sponsors/>

        <section>
            <div className="container">
                <hr></hr>
                Created with the <a href="https://github.com/asiermarques/gatsby-starter-conferencer">Gatsby Conferencer starter</a>
            </div>
        </section>

                

    </footer>
        )}
    />
)