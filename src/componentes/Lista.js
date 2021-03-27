import React from "react";
import Tarjeta from "./Tarjeta";


const Lista = ({productos}) => {


  
  return (
    <div>
      <div className="row pt-2">
        {productos.map((producto, i) => (
          <Tarjeta producto={producto} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Lista;
