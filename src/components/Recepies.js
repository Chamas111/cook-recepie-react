import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
const contentful = require("contentful");

function Recepies({ recepies }) {
  const formatRecepie = recepies.map((recep) => {
    //console.log(recep.fields.instructions);
    return (
      <>
        <div>
          <div
            class="card-shadow1 border bg-light"
            style={{ width: "18rem" }}
            key={recep.sys.id}
          >
            <img
              src={recep.fields.image[0].fields.file.url}
              class="card-img-top"
              alt={recep.fields.name}
              style={{ width: "287px", height: "270px" }}
            />

            <div class="card-body">
              <div class="container">
                <h5 class="card-title1 p-3 mt-5">{recep.fields.name}</h5>
                <p class="text">
                  {documentToReactComponents(recep.fields.description)}
                </p>
              </div>
            </div>
          </div>
          <Link to={`/recepies/${recep.sys.id}`}>
            <button class="btn1 btn1-shadow bg-light">More Details</button>
          </Link>
        </div>
      </>
    );
  });
  return (
    <>
      <div class=" recepie-hero mb-5 "></div>
      <div class="container d-flex gap-4 justify-content-arround flex-wrap ">
        {formatRecepie}
      </div>
    </>
  );
}
export default Recepies;
