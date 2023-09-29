import React, { useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function home() {
  // Estado para realizar un seguimiento del libro seleccionado y sus detalles
  const [selectedBook, setSelectedBook] = useState(null);

  // Datos de libros de muestra (puedes obtenerlos de tu API o simulación)
  const books = [
    {
      id: 1,
      title: 'Libro 1',
      image: 'ruta_imagen_libro_1.jpg',
      isbn: 'ISBN-123456789',
      details: 'Detalles del Libro 1...',
    },
    {
      id: 2,
      title: 'Libro 2',
      image: 'ruta_imagen_libro_2.jpg',
      isbn: 'ISBN-987654321',
      details: 'Detalles del Libro 2...',
    },
    // Agregar más libros aquí
  ];

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          {/* Lista de libros */}
          <h2>Libros Disponibles</h2>
          <div className="list-group">
            {books.map((book) => (
              <button
                key={book.id}
                className={`list-group-item list-group-item-action ${
                  selectedBook === book ? 'active' : ''
                }`}
                onClick={() => handleBookClick(book)}
              >
                {book.title}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          {/* Detalles del libro */}
          {selectedBook ? (
            <div>
              <h2>Detalles del Libro</h2>
              <Card>
                <Card.Img
                  variant="top"
                  src={selectedBook.image}
                  alt={selectedBook.title}
                />
                <Card.Body>
                  <Card.Title>{selectedBook.title}</Card.Title>
                  <Card.Text>ISBN: {selectedBook.isbn}</Card.Text>
                  <Card.Text>{selectedBook.details}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <p>Selecciona un libro para ver los detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default home;

