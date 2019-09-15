import React from "react"
import { graphql, StaticQuery } from "gatsby"

export const PureSponsors = ({ data }) => {
            
    const sponsor_blocks = data.site.siteMetadata.sponsor_blocks;
    const has_sponsors = !!sponsor_blocks.map( block => block.sponsors.length )
                                         .reduce((prev, current) => prev + current);
    
    return (<section id="sponsors">
                <div className="container">
                    {has_sponsors && <>    
                        <h2>Our sponsors</h2>

                        {sponsor_blocks.map( (block, index_block) => (
                        <div key={index_block} className="sponsor_block">
                            <h3>{block.name}</h3>
                            {block.sponsors.map( (sponsor, index) => <a key={index}
                                                                        href={sponsor.link} 
                                                                        title={sponsor.name}
                                                                        class="sponsor">
                                    <img src={sponsor.image} alt={sponsor.name} style={{
                                height: block.height_em + 'em',
                                width: 'auto'
                                }}/></a>
                            )}
                        </div>
                        ))}
                    </>}
                </div>
            </section>);
}

export const Sponsors = props => (
    <StaticQuery
        query={graphql`
        query {
            site {
                siteMetadata {
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
        render={data => <PureSponsors {...props} data={data} />}
    />
)