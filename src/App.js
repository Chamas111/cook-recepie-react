import "./App.css";
import Nav from "./components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Home from "./components/Home";
import Recepies from "./components/Recepies";
/* import Recepie2 from "./components/Recepie2";
import Recepie3 from "./components/Recepie3";
import Recepie4 from "./components/Recepie4"; */
import Contact from "./components/Contact";
import About from "./components/About";
import { NavLink, Routes, Route } from "react-router-dom";
const contentful = require("contentful");

function App() {
  return (
    <div className="App">
      <header>
        <nav className="header">
          <NavLink to="/" className="link-item ">
            Home
          </NavLink>

          <NavLink to="/recepies" className="link-item">
            Recepies
          </NavLink>
          {/*   <NavLink to="/recepie2" className="link-item">
              Recepie 2
            </NavLink>
            <NavLink to="/recepie3" className="link-item">
              Recepie 3
            </NavLink>
            <NavLink to="/recepie4" className="link-item">
              Recepie 4
            </NavLink> */}

          <NavLink to="/about" className="link-item">
            About
          </NavLink>
          <NavLink to="/contact" className="link-item">
            Contact
          </NavLink>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/recepies" element={<Recepies />}></Route>
            {/*   <Route path="/recepie2" element={<Recepie2 />}></Route>
            <Route path="/recepie3" element={<Recepie3 />}></Route>
            <Route path="/recepie4" element={<Recepie4 />}></Route> */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </header>

      {/* 
      {recepies.map((recepie) => (
        <div key={recepie.sys.id}>
          <h2>{recepie.fields.name}</h2>

          <h3>{recepie.fields.ingridients}</h3>
          <p>{recepie.fields.instructions}</p>
          <p>{documentToReactComponents(recepie.fields.description)}</p>
          <img
            src={recepie.fields.image[0].fields.file.url}
            alt="image"
            style={{ width: "200px" }}
          />
        </div>
      ))}
       */}
    </div>
  );
}

export default App;
