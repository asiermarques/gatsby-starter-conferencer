import React from "react"

export default (props) => <a class="card">
    <img src={props.imageUrl} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.company}</p>
    </div>
</a>
