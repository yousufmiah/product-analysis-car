import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h2 className="pb-3">About Our Web Site:</h2>
      <ul>
        <li>Thi is a Cad web site which is very important for car purchase.</li>
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
