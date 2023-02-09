//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { useEffect, useState } from "react";
const contentful = require("contentful");

function RecepiesDetails() {
  // let { id } = useParams();

  const [recepie, setRecepie] = useState({});

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
      .then((result) => setRecepie(result.items))
      .catch((err) => console.log(err));
  });

  return (
    <div class="Tabl">
      <table>
        <tr>
          <td>id</td>
          <td>{recepie.fields.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{recepie.fields.name}</td>
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
        {/*   <tr>
          <td>description</td>
          <td>{documentToReactComponents(recepie.fields.description)}</td>
        </tr> */}
        <button variant="outline-primary">Go back</button>
      </table>
    </div>
  );
}
export default RecepiesDetails;
