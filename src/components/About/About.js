import { useContext } from "react";
import { CarContext } from "../Header/Header";
import "./About.css";

const About = () => {
  const car = useContext(CarContext);
  // console.log(car);

  return (
    <div className="container about-page">
      <h3> It is here by Context Api: {car}</h3> <small></small>
      <h2 className="pb-3">About Our Web Site:</h2>
      <ul>
        <li>Thi is a Car web site which is very important for car purchase.</li>
        <br />
        <li>
          <strong>Home page: </strong> some text by description about car and
          picture and live demo can watch to select for car and some reviews
          what are our customer comments.
        </li>
        <br />
        <li>
          <strong>Reviews page: </strong> There are our all reviews of valuable
          customers.
        </li>
        <br />
        <li>
          <strong>Dashboard page: </strong> we can see our situation at present
          by chart in this page.
        </li>
        <br />
        <li>
          <strong>Blogs Page: </strong> there discuss some semantic element for
          layout of website.
        </li>
        <br />
        <li>
          <strong>About Page: </strong> Here we publish some text for about
          whole website.
        </li>
      </ul>
    </div>
  );
};

export default About;
