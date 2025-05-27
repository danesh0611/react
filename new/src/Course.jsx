import PropTypes from 'prop-types';

function Course({ name = "notset", des = "notset", show = false }) {
    const course = [
  {

  name: "html",
  des: "hello",
  show: true
}, 
{
  name: "css",
  des: "hello css",
  show: true
}
  ]
    return(
        const courselist = course.map((name) => ()
    )
}

Course.propTypes = {
    name: PropTypes.string,
    des: PropTypes.string,
    show: PropTypes.bool
};

export default Course;
