import React, {useState}  from "react";

export default function Navegacion({buscar}) {

    const [valor, setValor] = useState("");

    const enviarBusqueda= (e)=>{
        e.preventDefault();
        buscar(valor)
        setValor("")
      }
  return (
   
     
        <nav className="navbar navbar-light container-fluid bg-warning" style={{height: '70px'}}>
          <div className="container-fluid justify-content-evenly">
            <form className="d-flex" onSubmit={enviarBusqueda}>
              <input
                className="form-control me-3 "
                style={{width: '600px'}}
                type="search"
                onChange={(e) => setValor(e.target.value)}
                value={valor}
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </nav>
      
    
  );
}
