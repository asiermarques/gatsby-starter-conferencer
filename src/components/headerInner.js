import React from "react"

export default ({ data }) => <div class="jumbotron">
        <div class="container">
            <div className="row">
                <div className="col-sm-7">
                    <a href="/"><h2 class="display-4">{data.conference_name}</h2></a>
                    <p class="lead">{data.conference_claim}</p>
                </div>
                <div className="col-sm-5 text-center">
                    <p>{data.header_banner.cta_pre_text}</p>
                    <a class="btn btn-primary btn-lg" href={data.header_banner.cta_url} role="button">{data.header_banner.cta_text}</a>
                </div>
            </div> 
        </div>
    </div>
  

