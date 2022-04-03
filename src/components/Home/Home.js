import React from "react";
import "./Home.css";
import carImage from "../../images/car.png";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container text-center">
      <div className="d-flex">
        <div className="w-50">
          <h1>Your Next Cart</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            ipsa eos iusto assumenda nisi quia recusandae rerum placeat dolore
            eveniet.
          </p>
          <button>Live Demo</button>
        </div>
        <div>
          <img src={carImage} alt="" />
        </div>
      </div>
    </div>

    // <div className="container text-center ">
    //   <h2>Home page</h2>
    //   <div>
    //     <Row xs={1} md={2} lg={1} className="g-4">
    //       <Col>
    //         <Card>
    //           <div className="d-flex">
    //             <h1>nxt</h1>
    //             <p>
    //               This is a longer card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </p>
    //           </div>
    //           <div className="car-img">
    //             <Card.Img variant="top" src={carImage} />
    //           </div>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
  );
};

export default Home;
