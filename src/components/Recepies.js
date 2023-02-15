import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
const contentful = require("contentful");

function Recepies({ recepies, setSearchInput }) {
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const formatRecepie = recepies.map((recep) => {
    //console.log(recep.fields.instructions);
    return (
      <>
        <div>
          <div
            class="card-shadow1 border "
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
                <h5 class="card-title1 p-3">{recep.fields.name}</h5>
                <p class="text">
                  {documentToReactComponents(recep.fields.description)}
                </p>
              </div>
            </div>
          </div>
          <Link to={`/recepies/${recep.sys.id}`}>
            <button class="btn1 btn1-shadow">More Details</button>
          </Link>
        </div>
      </>
    );
  });
  return (
    <>
      {
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
      }
    </>
  );
}
export default Recepies;
