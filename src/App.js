import "./App.css";
import Nav from "./components/Nav";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const contentful = require("contentful");

function App() {
  const [recepies, setRecepies] = useState([]);

  const SPACE_ID = "5l97o5p6f7i4";
  const ENVIRONMENT_ID = "master";
  const ACCESS_TOKEN = "k5W8mi1k4jg_Y3Xpk87x73nREH0Chbeq6mNbvU175AE";

  useEffect(() => {
    const client = contentful.createClient(
      {
        space: SPACE_ID,

        accessToken: ACCESS_TOKEN,
        environment: ENVIRONMENT_ID,
      },
      []
    );

    client
      .getEntries()
      .then((result) => {
        setRecepies(result.items);
        console.log(result.items);
        // console.log(result.items[0].fields.image[0].fields.file.url);
      })
      .catch((err) => console.log(err));
  });

  return (

    <div className="container bg-primary">
      {recepies.map((recepie) => (
        <div key={recepie.sys.id}>
          <h2>{recepie.fields.name}</h2>
          <p>{documentToReactComponents(recepie.fields.description)}</p>
          <h3>{recepie.fields.ingridients}</h3>
          <p>{recepie.fields.instructions}</p>
         
         
          {/* <img
            src={recepie.fields.file.url}
            style={{ width: "200px" }}
          /> */}

    <div className="App">
      <Nav />

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
    </div>
  );
}

export default App;
