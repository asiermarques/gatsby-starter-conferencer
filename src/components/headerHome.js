import React from "react"

export default ({ data }) => <div class="jumbotron">
        <div class="container text-center">
            <h1 class="display-4">{data.conference_name}</h1>
            <p class="lead">{data.conference_claim}</p>
            <hr class="my-4"/>
            <p>{data.header_banner.cta_pre_text}</p>
            <a class="btn btn-primary btn-lg" href={data.header_banner.cta_url} role="button">{data.header_banner.cta_text}</a>
        </div>
    </div>