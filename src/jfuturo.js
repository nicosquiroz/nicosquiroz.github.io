import React from 'react';
import jfuturo from './img/movil 2.jpeg';
import "./jfuturo.css"

const Futuro = () => {
  return (
       <section id="juego" className='Eljuegodelfuturo'>
       <div className='jfuturo_txt'>
      <h1 id="titulo2" >EL JUEGO DEL FUTURO</h1>
        </div> 
       <img src={jfuturo} alt="cascofuturo" className="jfuturo"/> 
       </section>
  );
};

export default Futuro;