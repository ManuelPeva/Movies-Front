import React from 'react';

const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      {/* Aquí puedes agregar el contenido del spinner, como un icono de carga */}
      <div className="loader"></div>
      {/* También puedes agregar un mensaje opcional debajo del spinner */}
      <p className='cargando'>Cargando...</p>
    </div>
  );
};

export default Spinner;

