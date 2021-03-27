import React from "react";
import ReactPaginate from "react-paginate";
import "./Paginacion.css";

export default function Paginacion({cambioPagina, nroResultados}) {

const nroPaginas=Math.ceil(nroResultados/50)

  return (
    <div className="container-fluid justify-content-evenly">
      <ReactPaginate
        previousLabel="Antes"
        nextLabel="Siguiente"
        pageCount={nroPaginas}
        marginPagesDisplayed="1"
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        onPageChange={cambioPagina}
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
}
