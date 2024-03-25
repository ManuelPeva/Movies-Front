import React from 'react';

const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      {/* Aquí puedes agregar el contenido del spinner, como un icono de carga */}
      <div className="loadingSpinner"></div>
      {/* También puedes agregar un mensaje opcional debajo del spinner */}
      <p>Cargando...</p>
    </div>
  );
};

export default Spinner;

