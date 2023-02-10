//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
const contentful = require("contentful");

function RecepiesDetails({ recepies }) {
  //let { id } = useParams();
  //let params = useParams();
  const navigate = useNavigate();

  //console.log("recepie", recepie);

  return (
    <div class="Tabl">
      <table>
        <tr>
          <td>id</td>
          <td>{recepies.sys.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{recepies.fields.name}</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>
            <img
              src={recepies.fields.image[0].fields.file.url}
              alt={recepies.fields.name}
              style={{ width: "200px" }}
            />
          </td>
        </tr>
        <tr>
          <td>ingridients</td>
          <td>{recepies.fields.ingridients}</td>
        </tr>
        <tr>
          <td>instructions</td>
          <td>{recepies.fields.instructions}</td>
        </tr>
        {/*   <tr>
          <td>description</td>
          <td>{documentToReactComponents(recepie.fields.description)}</td>
        </tr> */}
        <Link to={"../recepies"}>
          <button type="button" class="btn btn-outline-dark">
            ← GoBack
          </button>
        </Link>
      </table>
    </div>
  );
}
export default RecepiesDetails;
