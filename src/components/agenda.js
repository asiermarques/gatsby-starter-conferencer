import React from "react"
import { graphql, StaticQuery } from "gatsby"


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
                        talk_title,
                        talk_description
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
            const agenda = data.site.siteMetadata.agenda.time_slots.map((slot, index) => {

                const content = tracks.map(track => {
                    const track_content = track.content_in_slots[index];
                    const empty = {type: "empty"}

                    if(!track_content || !track_content.type) return empty;

                    return {
                        type: track_content.type,
                        content: track_content.type === "speaker" ?
                                data.site.siteMetadata.speakers.find(speaker => speaker.slug === track_content.content)
                                : track_content.content
                    }

                });
                content.unshift(slot);

                return content;

            });
            
            return (
            <section id="agenda">
                <div class="container">
                    <h2 class="display-4">Agenda</h2>
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
                                        
                                        if(content_item.type === "speaker") { console.log(content_item)
                                            return (
                                                <td>
                                                    <a href="#">
                                                        <h5>{content_item.content.talk_title}</h5>
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
            </section>
        )}}
    />
)