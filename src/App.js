import "./App.css";

import Recepies from "./components/Recepies";
import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Home from "./components/Home";
import RecepiesDetails from "./components/RecepiesDetails";
import RegistrationForm from "./components/Form";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

import { NavLink, Routes, Route } from "react-router-dom";
import logo from "./images/LogoCok.png";

import { color } from "@mui/system";

import { Link } from "react-router-dom";

const contentful = require("contentful");

function App() {
  const [recepies, setRecepies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
        setRecepies(response.items);
      });

    // client
    //   .getTags()
    //   .then((response) => console.log(response.items))
    //   .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header>
        <nav style={{ background: "#05180b", color: "white" }}>
          <img src={logo} width={50} />
          <p className="logoName"> Pinch Of Salt</p>
          <div className="navbarItems">
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
          </div>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/recepies"
            element={
              <>
                <div className="container d-flex gap-5 justify-content-arround flex-wrap ">
                  <Recepies
                    recepies={recepies}
                    setSearchInput={setSearchInput}
                  />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/recepies/:id"
            element={<RecepiesDetails recepies={recepies} />}
          ></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<RegistrationForm />}></Route>
        </Routes>
      </div>

      {/* <footer>
        <Footer />
      </footer> */}

      <Footer />
    </div>
  );
}

export default App;
