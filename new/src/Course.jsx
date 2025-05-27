import PropTypes from 'prop-types';

function Course({ name = "notset", des = "notset", show = false ,price= "notset"}) {
  
    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>{des}</h2>
            <h3>{price}</h3>
            <p>{show ? "Course is available" : "Course is not available"}</p>
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