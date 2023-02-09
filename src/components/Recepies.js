import RecepiesDetails from "./RecepiesDetails";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const contentful = require("contentful");

function Recepies() {
  const navigate = useNavigate();
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
      .then((result) => setRecepies(result.items))
      .catch((err) => console.log(err));
  });

  const formatRecepie = recepies.map((recep) => {
    return (
      <>
        <div className="col-md-3" key={recep.sys.id}>
          <Link to={`../recepies/${recep.fields.name}`}>
            <div className="card" style={{ width: "15rem", margin: "15px" }}>
              <img
                src={recep.fields.image[0].fields.file.url}
                className="card-img-top"
                alt={recep.fields.name}
              />
              <div className="card-body">
                <h5 className="link-item">{recep.fields.name}</h5>

                <button className="btn1">view more</button>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  });
  return <div className="row">s{formatRecepie}</div>;
}
export default Recepies;
