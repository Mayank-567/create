import React from "react"

const Form = props =>{
    return(
        <div className="container">
            <form onSubmit={props.loadweather}>
            <div className="row">
                <div className="col-md-4 m-2">
                    <input type="text" classname="form-control" name="city" autoComplete="off" placeholder="City"/>
                </div>
                <div className="col-md-4 m-2">
                    <input type="text" classname="form-control" name="country" autoComplete="off" placeholder="Country"/>
                    </div>
                <div className="col-md-3">
                    <button className="btn btn-primary">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Form;