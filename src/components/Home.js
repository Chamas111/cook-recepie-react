import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Recipe1 from "./../images/Recipe1.jpg";
import Recipe2 from "./../images/Recipe2.jpg";
import Recipe3 from "./../images/Recipe3.jpg";

import Recipe4 from "./../images/Recepies_1.png";
import Teams from "./Teams";
function Home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Recipe1}
            alt="First slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h3>
              “Cooking is like love. It should be entered into with abandon or
              not at all.”
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Recipe2}
            alt="Second slide"
            style={{ height: "100vh" }}
          />

          <Carousel.Caption>
            <h3>
              “Cooking is like painting or writing a song. Just as there are
              only so many notes or colors, there are only so many flavors—it’s
              how you combine them that sets you apart.”
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Recipe3}
            alt="Third slide"
            style={{ height: "100vh" }}
          />

          <Carousel.Caption>
            <h3>
              “Cooking with kids is not just about ingredients, recipes, and
              cooking. It’s about harnessing imagination, empowerment, and
              creativity.”
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Teams />
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <div className="row mt-3 section2-title">
            <h1>
              <em>Recepies</em>
            </h1>
            <div className="image col-lg-6 mt-3">
              <img src={Recipe4} alt="Recepies" />
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="icon-box mt-5 mt-lg-0">
                <h4>Garlic Naan</h4>
                <p>
                  Delicious Indian Naan bread for you, your friends, and your
                  whole family.
                </p>
              </div>
              <div className="icon-box mt-5">
                <i className="bx bx-cube-alt"></i>
                <h4>Mamaliga</h4>
                <p>
                  We see polenta as a stand-alone dish, not simply a side dish.
                  But it is a versatile food that pairs well with meat, fish,
                  sauces stews and eggs.
                </p>
              </div>
              <div className="icon-box mt-5">
                <i className="bx bx-images"></i>
                <h4>Quattro formaggi</h4>
                <p>
                  Pizza quattro formaggi Italian: is a variety of pizza in
                  Italian cuisine that is topped with a combination of four
                  kinds of cheese.
                </p>
              </div>
              <div className="icon-box mt-5">
                <i className="bx bx-shield"></i>
                <h4>Tabouli</h4>
                <p>
                  Tabouli salad or Tabbouleh is a simple Mediterranean salad of
                  very finely chopped vegetables, lots of fresh parsley and
                  bulgur wheat, all tossed with lime juice and olive oil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
