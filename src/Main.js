import React from "react"
/* <img src={`../public/photos/${props.imageUrl}`} /> */
{/* <img src="./photos/orlando.jpg " /> */}

export default function Main(props){
    return (
            <div className="card flex container">
                
                <img src={`./photos/${props.imageUrl} `} className="card-img"/>
                <div className="card-data flex">
                    <p>
                    <span></span>
                    <span>{props.location}</span>
                    <span>{props.mapsURL}</span>
                    </p>                
                    <h2>{props.title}</h2>
                    <p><strong>{props.start} - {props.end}</strong></p>
                    <p>{props.desc}</p>
                </div>
                


            </div>

        
    )
}