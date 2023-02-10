import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const contentful = require("contentful");

function RecepiesDetails({ recepies }) {
  const { id } = useParams();

  console.log("recepieuuuuuuuuuuuu", recepies);
  console.log("recepieiddddddddddddd", id);
  const recepie = recepies.find((p) => p.sys.id == id);
  const navigate = useNavigate();
  console.log("recepiei", recepie);
  return recepie ? (
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
  ) : (
    <h3>No Product Matched with id {id}</h3>
  );

  {
    /*   <table>
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
           <tr>
          <td>description</td>
          <td>{documentToReactComponents(recepie.fields.description)}</td>
        </tr> 
        <Link to={"../recepies"}>
          <button type="button" class="btn btn-outline-dark">
            ← GoBack
          </button>
        </Link>
      </table> */
  }
}
export default RecepiesDetails;
