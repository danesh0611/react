import Course from './Course';
   function Courselist() {
  const course = [
    {
      name: "html",
      des: "hello",
      show: true,
      price: 100
    }, 
    {
      name: "css",
      des: "hello css",
      show: true,
      price: 200
    }

  ];
      course.sort((x,y)=> x.price - y.price);
      const vfmcourse = course.filter((course)=> course.price<200)
  return (
    <>
      {vfmcourse.map((course, index) => (
        <Course name={course.name} des={course.des} show={course.show} price={course.price} key={index} />
      ))}
    </>
  );
}
export default Courselist;