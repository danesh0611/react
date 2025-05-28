import PropTypes from 'prop-types';
import { useState } from 'react';

function Course({ name = "notset", des = "notset", show = false ,price= "notset"}) {
    const[purchased,setpurchaseed]= useState(false)
    function buy(){
        console.log("buying course");
        setpurchaseed(true);
    }
  
    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>{des}</h2>
            <h3>{price}</h3>
            <p>{show ? "Course is available" : "Course is not available"}</p>
            <button onClick={buy}>Buy now </button>
            <p>{purchased?"already purchased" : "not purchased"}</p>
        </div>
    );
}

Course.propTypes = {
    name: PropTypes.string,
    des: PropTypes.string,
    show: PropTypes.bool,
    price:PropTypes.int
};

export default Course