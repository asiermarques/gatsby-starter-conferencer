import React from "react"

export default (props) => <>
    <h3>Organizers</h3>
    <div class="row justify-content-start">
    {props.items.map( (organizer, index) => 
        <div key={index} class="col-6 col-md-3">
            <a href={organizer.link} title={organizer.name} 
            target="_blank" 
            rel="noopener noreferrer">
                <img src={organizer.image} alt={organizer.name}  class="img-thumbnail"/>
            </a>
        </div>
    )}
    </div>
</>
