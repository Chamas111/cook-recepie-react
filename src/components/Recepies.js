import { Link } from "react-router-dom";
const contentful = require("contentful");

function Recepies({ recepies }) {
  console.log("recepies", recepies);
  return (
    <ul>
      {recepies.map((recepie) => (
        // <Product product={product} key={product.id} />
        <li key={`/recepies/${recepie.sys.id}`}>
          <Link to={`/recepies/${recepie.sys.id}`}>{recepie.fields.name}</Link>
        </li>
      ))}
    </ul>
  );
  /*  const formatRecepie = recepies.map((recep) => {
    return (
      <>
        <div className="col-md-3" key={recep.sys.id}>
          <Link to={`/recepies/${recep.sys.id}`}>
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
  return <div className="row">{formatRecepie}</div>; */
}
export default Recepies;
