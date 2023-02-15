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
        <nav style={{ background: "lightblue" }}>
          <img src={logo} width={50} />
          <NavLink to="/" className="logoName">
            Pinch Of Salt
          </NavLink>
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
          <NavLink to="/login" className="link-item">
            login
          </NavLink>
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

                  {recepies
                    .filter((recipe) =>
                      recipe.fields.name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    )
                    .map((recipe) => (
                      <div>
                        <div
                          class="card-shadow1 border "
                          style={{ width: "18rem" }}
                          key={recipe.sys.id}
                        >
                          <img
                            src={recipe.fields.image[0].fields.file.url}
                            class="card-img-top"
                            alt={recipe.fields.name}
                            style={{ width: "287px", height: "270px" }}
                          />

                          <div class="card-body">
                            <div class="container">
                              <h5 class="card-title1 p-3">
                                {recipe.fields.name}
                              </h5>
                              <p class="text">
                                {documentToReactComponents(
                                  recipe.fields.description
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Link to={`/recepies/${recipe.sys.id}`}>
                          <button class="btn1 btn1-shadow">More Details</button>
                        </Link>
                      </div>
                    ))}
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

      <Footer />
    </div>
  );
}

export default App;
