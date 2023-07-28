import React from 'react';
import jfuturo from './img/movil 2.jpeg';
import "./jfuturo.css"

const Futuro = () => {
  return (
       <section id="juego" className='Eljuegodelfuturo'>
       <div className='jfuturo_txt'>
      <h1 >EL JUEGO DEL FUTURO</h1>
        </div> 
       <img src={jfuturo} alt="cascofuturo" class="jfuturo"/> 
       </section>
  );
};

export default Futuro;