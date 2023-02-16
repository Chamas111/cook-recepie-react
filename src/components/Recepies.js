import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
const contentful = require("contentful");

function Recepies() {
  const SPACE_ID = "5l97o5p6f7i4";
  const ENVIRONMENT_ID = "master";
  const ACCESS_TOKEN = "k5W8mi1k4jg_Y3Xpk87x73nREH0Chbeq6mNbvU175AE";

  const [recepies, setRecepies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };


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
    <>
      <div className="container">
        <div className=" recepie-hero mb-5 ">
          <div className="flexbox">
            <div className="search">
              <h3>Click on search icon, then type your Recipe.</h3>
              <div>
                <input
                  type="text"
                  placeholder="Search . . ."
                  required
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {recepies
        .filter((recipe) =>
          recipe.fields.name.toLowerCase().includes(searchInput.toLowerCase())
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
                  <h5 class="card-title1 p-3">{recipe.fields.name}</h5>
                  <p class="text">
                    {documentToReactComponents(recipe.fields.description)}
                  </p>
                </div>
              </div>
            </div>
            <Link to={`/recepies/${recipe.sys.id}`}>
              <button class="btn1 btn1-shadow">More Details</button>
            </Link>
          </div>
        ))}
    </>
  );
}
export default Recepies;
