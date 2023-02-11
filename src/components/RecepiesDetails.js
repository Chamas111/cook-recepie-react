import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const contentful = require("contentful");

function RecepiesDetails({ recepies }) {
  const { id } = useParams();
  const [key, setKey] = useState("Ingredients");

  const recepie = recepies.find((p) => p.sys.id == id);

  const navigate = useNavigate();

  return recepie ? (
    <div class="recipe-card-1">
      <img
        src={recepie.fields.image[0].fields.file.url}
        class="card-img-top"
        alt={recepie.fields.name}
        style={{ width: "600px", height: "450px" }}
      />
      <div class="recipe-card__body">
        <h1 class="recipe-card__heading">{recepie.fields.name}</h1>
        <h2 class="recipe-card__subhead">
          {documentToReactComponents(recepie.fields.description)}
        </h2>

        <Tabs
          defaultActiveKey="profile"
          className="mb-3"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="Ingredients" title="Ingredients">
            <ul class="recipe-card__ingredients">
              {recepie.fields.ingridients.map((q) => (
                <li>{q}</li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="Method" title="Method">
            <ul class="recipe-card__ingredients">
              {recepie.fields.instructions.map((inst) => (
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

  {
  }
}
export default RecepiesDetails;
