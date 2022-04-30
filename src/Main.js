import React from "react"
/* <img src={`../public/photos/${props.imageUrl}`} /> */
{/* <img src="./photos/orlando.jpg " /> */}

export default function Main(props){
    return (
            <div className="card flex container">
                
                <img src={`./photos/${props.imageUrl} `} className="card-img"/>
                <div className="card-data flex">
                    <p className="location-container">
                    <span className="location-pin">📍</span>
                    <span className="location-name">{props.location}</span>
                    <a className="google-maps-link" href={props.mapsURL} target="_blank">View in google maps!</a>
                    </p>                
                    <h2 className="location-title">{props.title}</h2>
                    <p className="travel-dates"><strong >{props.start} - {props.end}</strong></p>
                    <p className="travel-description">{props.desc}</p>
                    
                </div>
                


            </div>

        
    )
}