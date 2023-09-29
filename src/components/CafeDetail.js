import React from 'react';

function CafeDetail({ cafe }) {
  if (!cafe) {
    return <div>No se ha seleccionado ningún café.</div>;
  }

  return (
    <div className="card">
      <div className="card-header">{cafe.nombre}</div>
      <div className="card-body">
        <p>Fecha de Cultivo: {cafe.fechaCultivo}</p>
        <img src={cafe.imagen} alt={cafe.nombre} className="img-fluid" />
        <p>Notas: {cafe.notas}</p>
        <p>Altura de Cultivo: {cafe.alturaCultivo} metros</p>
      </div>
    </div>
  );
}

export default CafeDetail;
