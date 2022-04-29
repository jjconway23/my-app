import React from "react"


export default function Main(props){
    return (
            <div className="card ">
                <img src={`../public/photos/${props.img} `}/>
                <span></span>
                <span>{props.location}</span>
                <span>{props.mapsURL}</span>
                <p><strong>{props.start} - {props.end}</strong></p>
                <p>{props.desc}</p>


            </div>

        
    )
}