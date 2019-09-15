import React from "react"
import { graphql, StaticQuery } from "gatsby"

export const PureLocationMap = ({ data }) => {
            
  const location = data.site.siteMetadata.location;
  return (
    <section id="where">
        <h2 class="text-center">Location</h2>
        <div class="content_wrap">

          <div class="content">
            <div class="container">
              <div class="col-md-5 col-xs-12">

                <div class="card">
                  <div class="card-body">
                  {location.addresses.map( (address, index) => (<div key={index} class="address">

                    <h5>{address.name}</h5>
                    <p> 
                      <span dangerouslySetInnerHTML={{__html:address.line}}></span>
                      <br></br>
                      <small><a target="_blank" rel="noopener noreferrer" href={address.map_link}>open map</a></small>
                    </p>

                  </div>) )}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <iframe src={location.gmaps_iframe_url}
          width="100%" 
          height="550" 
          title="map"
          frameborder="0" 
          allowfullscreen="false"></iframe>
        </div>
    </section>
  );
}

export const LocationMap = props => (
    <StaticQuery
        query={graphql`
        query {
            site {
              siteMetadata {
                location {
                  gmaps_iframe_url,
                  addresses {
                    name,
                    line,
                    map_link
                  }
                }
              }
            }
          }
        `}
        render={data => <PureLocationMap {...props} data={data} />}
    />
)