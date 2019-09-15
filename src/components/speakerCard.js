import React from "react"

export default (props) => <a class="card speaker" href={props.speaker.slug}>
    <div class="image" style={{backgroundImage: `url('${props.speaker.image}')`}}></div>
    <div class="card-body">
        <h5 class="card-title">{props.speaker.name}</h5>
        <p class="card-text">{props.speaker.company}</p>
    </div>
</a>
