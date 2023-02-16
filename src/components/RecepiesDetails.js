import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const contentful = require("contentful");

function RecepiesDetails() {
  const SPACE_ID = "5l97o5p6f7i4";
  const ENVIRONMENT_ID = "master";
  const ACCESS_TOKEN = "k5W8mi1k4jg_Y3Xpk87x73nREH0Chbeq6mNbvU175AE";
  const { id } = useParams();
  const [key, setKey] = useState("Ingredients");
  const [recipe, setRecipe] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
      environment: ENVIRONMENT_ID,
    });

    client
      .getEntry(id)

      .then((response) => {
        setRecipe(response);
      });

    // client
    //   .getTags()
    //   .then((response) => console.log(response.items))
    //   .catch(console.error);
  }, []);
  return recipe ? (
    <div class="recipe-card-1">
      <img
        src={recipe.fields.image[0].fields.file.url}
        class="card-img-top"
        alt={recipe.fields.name}
        style={{ width: "600px", height: "450px" }}
      />
      <div class="recipe-card__body">
        <h1 class="recipe-card__heading">{recipe.fields.name}</h1>
        <h2 class="recipe-card__subhead">
          {documentToReactComponents(recipe.fields.description)}
        </h2>

        <Tabs
          defaultActiveKey="profile"
          className="mb-3"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="Ingredients" title="Ingredients">
            <ul class="recipe-card__ingredients">
              {recipe.fields.ingridients.map((q) => (
                <li>{q}</li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="Method" title="Method">
            <ul class="recipe-card__ingredients">
              {recipe.fields.instructions.map((inst) => (
                <li>{inst}</li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </div>
      <button class="btn1 btn1-shadow" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  ) : (
    /*
    <div className="">
      <table key={recepie.sys.id}>
        <tr>
          <td>Name</td>
          <td>{recepie.fields.name}</td>
        </tr>
        <tr>
          <td>description</td>
          <td>{documentToReactComponents(recepie.fields.description)}</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>
            <img
              src={recepie.fields.image[0].fields.file.url}
              alt={recepie.fields.name}
              style={{ width: "200px" }}
            />
          </td>
        </tr>
        <tr>
          <td>ingridients</td>
          <td>{recepie.fields.ingridients}</td>
        </tr>
        <tr>
          <td>instructions</td>
          <td>{recepie.fields.instructions}</td>
        </tr>
      </table>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
    */
    <h3>No Product Matched with id {id}</h3>
  );
}
export default RecepiesDetails;
