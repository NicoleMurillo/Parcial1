import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CafeDetail from './CafeDetail';

function CafeList() {
  const [cafes, setCafes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

  useEffect(() => {
    axios.get('https://github.com/isis3710-uniandes/202320_Parcial1_Back.git')
      .then((response) => {
        setCafes(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de cafés:', error);
      });
  }, []);

  const handleCafeClick = (cafe) => {
    // clic en el nombre
    setSelectedCafe(cafe);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Listado de Cafés</h1>
          <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Región</th>
          </tr>
          </thead>
            <tbody>
            {cafes.map((cafe, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => handleCafeClick(cafe)}
                    >
                      {cafe.nombre}
                    </button>
                  </td>
                  <td>{cafe.tipo}</td>
                  <td>{cafe.region}</td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <CafeDetail cafe={selectedCafe} />
        </div>
      </div>
    </div>
  );
}

export default CafeList;
