import React from "react";
import chef from "./../images/chef-2.png";

function Team() {
  return (
    <>
      <div className="p-5">
        <div className="container">
          <h2 className="h1 text-dark fonts-logo-titles mb-5">Our Team</h2>
          <div className="row text-center">
            <div className="col-lg-3 gap-3 col-sm-12">
              <img src={chef} alt="chef" className="img-fluid bg-light" />
              <p className="text-dark fw-bold mt-3" style={{ fontSize: 25 }}>
                Priyanka
              </p>
            </div>
            <div className="col-lg-3 gap-3 col-sm-12">
              <img src={chef} alt="chef" className="img-fluid bg-light" />
              <p className="text-dark fw-bold mt-3" style={{ fontSize: 25 }}>
                Ahmad
              </p>
            </div>
            <div className="col-lg-3 gap-3 col-sm-12">
              <img src={chef} alt="chef" className="img-fluid bg-light" />
              <p className="text-dark fw-bold mt-3" style={{ fontSize: 25 }}>
                Cristian
              </p>
            </div>
            <div className="col-lg-3 gap-3 col-sm-12">
              <img src={chef} alt="chef" className="img-fluid bg-light" />
              <p className="text-dark fw-bold mt-3" style={{ fontSize: 25 }}>
                Kevin
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
