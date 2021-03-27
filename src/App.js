import React, { useState } from "react";
import Lista from "./componentes/Lista.js";
import Paginacion from "./componentes/Paginacion.js";
import Navegacion from "./componentes/Navegacion.js";
import axios from "axios";

function App() {
  const url = "https://api.mercadolibre.com/sites/MCO/search?q=";
  const [cargando, setCargando] = useState(false);
  const [offset, setOffset] = useState(0);
  const [item, setItem] = useState("");
  const [productos, setProductos] = useState([]);
  const [nroResultados, setNroResultados] = useState(0);

  const pasarPagina = async (p) => {
    await setOffset(p.selected * 50);
    llamarApi(item);
  };

  const llamarApi = async (producto) => {
    setCargando(true);
    const res = await axios.get(url + producto + "&&offset=" + offset);
    const resultados = await res.data.results;
    const nroResultados = await res.data.paging.total;
    setProductos(resultados);
    setNroResultados(nroResultados);
    setCargando(false);
    setItem(producto);
  };

  

  return (
    <div>
      <Navegacion buscar={llamarApi} />
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <Lista productos={productos} />
          
        </div>
      )}
     
        <Paginacion
            cambioPagina={pasarPagina}
            nroResultados={nroResultados}
          />
      
    </div>
  );
}

export default App;
