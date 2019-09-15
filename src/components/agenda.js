import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { from } from "rxjs";
import agendaMapper from "../lib/agendaMapper"


export default () => (
    <StaticQuery
        query={graphql`
        query {
            site {
                siteMetadata {
                    speakers {
                        slug,
                        name,
                        company,
                        talk{
                            title,
                            description
                        }
                    },
                    agenda {
                        visible,
                        time_slots,
                        tracks{ 
                            name,
                            content_in_slots {
                                type,
                                content
                            }
                        }
                    }
                }
            }
        }
        `}
        render={ data => {
            
            const tracks = data.site.siteMetadata.agenda.tracks;
            const agenda = agendaMapper(data.site.siteMetadata.agenda, data.site.siteMetadata.speakers);
            
            return (
            <section id="agenda">
                <div class="container">
                    <h2 class="text-center">Agenda</h2>
                    <div class="table-responsive-sm">
                    <table id="agenda-table" class="table table-striped stacktable large-only">
                            <thead>
                            <tr>
                                <th></th>
                                {tracks.map( track => <th width="40%">{track.name}</th> )}
                            </tr>
                            </thead>
                            <tbody>
                            {agenda.map( slot => { 
                                const [time_range, ...content] = slot;
                                return (<tr>
                                    <td class="time">{time_range}</td>
                                    {content.map( content_item => {
                                        
                                        if(content_item.type === "speaker") { 
                                            return (
                                                <td>
                                                    <a href={content_item.content.slug + "#talk"}>
                                                        <h5>{content_item.content.talk.title}</h5>
                                                        <p>{content_item.content.name}</p>
                                                    </a>
                                                </td>
                                            )
                                        }else{
                                            return (<td><p>{content_item.content}</p></td>)
                                        }
                                    })}
                                </tr>
                                )
                            })}
                            </tbody>
                    </table>
                    </div>
                </div>
            </section>
        )}}
    />
)