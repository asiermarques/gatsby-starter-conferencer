import React from "react"

export default (props) => <a class="card" href={props.speaker.slug}>
    <img src={props.speaker.image} class="card-img-top" alt={props.speaker.name}/>
    <div class="card-body">
        <h5 class="card-title">{props.speaker.name}</h5>
        <p class="card-text">{props.speaker.company}</p>
    </div>
</a>
