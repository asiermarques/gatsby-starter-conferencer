import React from "react"

export default ({speaker}) => <a class="card speaker" href={speaker.slug}>
    <div class="image" style={{backgroundImage: `url('${speaker.image}')`}}></div>
    <div class="card-body">
        <h5 class="card-title">{speaker.name}</h5>
        <p class="card-text">{speaker.company}</p>
    </div>
</a>
