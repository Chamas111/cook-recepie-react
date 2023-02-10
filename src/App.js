import "./App.css";

import Recepies from "./components/Recepies";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Home from "./components/Home";
import RecepiesDetails from "./components/RecepiesDetails";

import Contact from "./components/Contact";
import About from "./components/About";
import { NavLink, Routes, Route } from "react-router-dom";
const contentful = require("contentful");

function App() {
  const [recepies, setRecepies] = useState([]);

  const SPACE_ID = "5l97o5p6f7i4";
  const ENVIRONMENT_ID = "master";
  const ACCESS_TOKEN = "k5W8mi1k4jg_Y3Xpk87x73nREH0Chbeq6mNbvU175AE";

  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,

      accessToken: ACCESS_TOKEN,
      environment: ENVIRONMENT_ID,
    });

    client

      .getEntries({
        content_type: "recipeGr3",
      })
      .then((response) => {
        console.log("response.items", response.items);
        setRecepies(response.items);
      });
  }, []);
  //console.log("response.items",response.items);

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
            <Route
              path="/recepies"
              element={<Recepies recepies={recepies} />}
            ></Route>
            <Route
              path="/recepies/:id"
              element={<RecepiesDetails recepies={recepies} />}
            ></Route>

            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

     

  
        </div>
      </header>
    </div>
  );
}

export default App;
