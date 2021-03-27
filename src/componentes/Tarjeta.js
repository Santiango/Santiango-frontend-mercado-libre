import React from "react";

const Tarjeta = ({ producto }) => {
  return (
    <div className="col-md-4">
      <div className="card mt-3">
        <div className="product-1 align-items-center p-2 text-center">
          <img
            className="rounded w-auto"
            src={producto.thumbnail}
            alt="Card image cap"
            style={{ height: "160px", width: "160px" }}
          />
          <h5>{producto.title}</h5>
          <div className="cost mt-3 text-dark">
            <span className="text1 d-block">${producto.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
