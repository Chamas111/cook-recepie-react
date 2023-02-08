import React from "react";

function Nav() {
  return (
    <div>
      <section className="hero">
        <nav className=" d-flex justify-content-evenly header ">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Recepies</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="btn1">
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h4>
          <br></br>
          <button type="button" class="btn btn-outline-info ">
            more info
          </button>
        </div>
      </section>
    </div>
  );
}

export default Nav;
