import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Recipe1 from "./../images/Recipe1.jpg";
import Recipe2 from "./../images/Recipe2.jpg";
import Recipe3 from "./../images/Recipe3.jpg";
import Team from "./Team";

function Home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Recipe1} alt="First slide" />
          <Carousel.Caption>
            <h3>
              “Cooking is like love. It should be entered into with abandon or
              not at all.”
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Recipe2} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              “Cooking is like painting or writing a song. Just as there are
              only so many notes or colors, there are only so many flavors—it’s
              how you combine them that sets you apart.”
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Recipe3} alt="Third slide" />

          <Carousel.Caption>
            <h3>
              “Cooking with kids is not just about ingredients, recipes, and
              cooking. It’s about harnessing imagination, empowerment, and
              creativity.”
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Team />
    </>
  );
}

export default Home;
