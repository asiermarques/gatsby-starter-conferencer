import React from "react"

export default (props) => <ul className="nav flex-column">
{props.items.map( (item, index) => 
    <li key={index} className="nav-item">
        <a href={item.link} className="nav-link" title={item.title}>{item.title}</a>
    </li>
)}
</ul>