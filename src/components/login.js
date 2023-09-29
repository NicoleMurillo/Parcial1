import React from 'react';
import { Link } from 'react-router-dom';

function login() {
  return (
    <div className="container-fluid login-background">
      <div className="row justify-content-center align-items-center login-container">
        <div className="col-md-6 text-center">
          <img
            src="ruta_de_la_imagen_de_libros.jpg"
            alt="Imagen de libros"
            className="img-fluid"
          />
          <p>Encuentra hasta el libro que no estabas buscando</p>
        </div>
        <div className="col-md-6">
          <h2>Tu librería aliada</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
              <small><Link to="/forgot-password">¿Olvidaste tu contraseña?</Link></small>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
