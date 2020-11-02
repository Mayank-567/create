import React from 'react';

const Weather =(props)=>{
    return(
    <div className="container">
        <div className="cards">

        
        <h1 className="p-4">
    <h1>{props.city}</h1>
            <i className={`wi ${props.icons} display-1`} />
        </h1>
        {props.celsius ? <h1 className="p-2">{props.celsius}&deg;</h1>:null }

    {/* <h1 className="p-2">{props.celsius}&deg;</h1> */}
        {minmaxTemp(props.temp_min,props.temp_max)}
        <h2>
        {props.description}
        </h2>
        </div>
        {/* <i className="wi wi-fog"></i> */}
    </div>        
    )
}

function minmaxTemp(min,max){
    if (min && max){
        return(
            <h2>
            <span className="p-1">{min}&deg;</span>
            <span className="p-1">{max}&deg;</span>
        </h2>
        )
    }
    
}
export default Weather