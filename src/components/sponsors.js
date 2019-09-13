import React from "react"
import { graphql, StaticQuery } from "gatsby"

export default () => (
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
        render={ data => {
            
            const sponsor_blocks = data.site.siteMetadata.sponsor_blocks;
            const has_sponsors = !!sponsor_blocks.map( block => block.sponsors.length )
                                                 .reduce((prev, current) => prev + current);
            
            return <section id="sponsors">
                        <div className="container">
                            {has_sponsors && <>    
                                <h2>Our sponsors</h2>

                                {sponsor_blocks.map( block => (
                                <>
                                    <h3>{block.name}</h3>
                                    {block.sponsors.map( sponsor => <a href={sponsor.link} 
                                                                        title={sponsor.name}
                                                                        class="sponsor">
                                                                        <img src={sponsor.image} style={{
                                        height: block.height_em + 'em',
                                        width: 'auto'
                                        }}/></a>
                                    )}
                                </>
                                ))}
                            </>}
                        </div>
                    </section>
        }}
    />
)