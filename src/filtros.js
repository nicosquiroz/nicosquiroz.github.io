
// TEST CON FILTROS. Conectar con endpoints
import './App.css';
import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import debounce from 'lodash.debounce';

// console.log({imageData});





 const Filtros = () =>{


    const [imageData, setImageData] = useState("");

    // // Realizar una solicitud GET para obtener la imagen precargada al cargar el componente
    // useEffect(() => {
    //   Axios.get("http://127.0.0.1:8000/apply_filter/nofilter")  // Puedes usar cualquier filtro aquí
    //     .then((res) => {
    //       setImageData(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, []); 






    const fetchImageData = (filter) => {
      Axios.get("https://nsq-production.up.railway.app/apply_filter/" +filter, { responseType: 'arraybuffer' }).then((res) => {
        const base64String = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );

        // Genera el enlace base64 de la imagen
        const imageData = `data:image/png;base64,${base64String}`;
    
        // Establece el enlace base64 en el estado para mostrar la imagen
        setImageData(imageData);
        console.log("fetching!");
        });
    };
    
    useEffect(() => {
      fetchImageData('nofilter');
    }, []);

    const setOriginal = debounce(() => {
            setImageData("")
            console.log("original set");
          }, 100);



//POST DATA

const handleFileUpload = (event) => {
  const file = event.target.files[0];
            const formData = new FormData();
            console.log(file);
            formData.append("file", file);

  Axios.post("https://nsq-production.up.railway.app/testimage/", formData, { responseType: 'arraybuffer' }).then((res) => {
    // , { responseType: 'arraybuffer' }
    console.log(res.data);
    
    const base64String = btoa(
      new Uint8Array(res.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );

    // Genera el enlace base64 de la imagen
    const imageData = `data:image/png;base64,${base64String}`;

    // Establece el enlace base64 en el estado para mostrar la imagen
    setImageData(imageData);
    console.log("devuelta!");
    }).catch(function(err) {
      console.log(err);                          
  });
};



          // DATA
          
          // const handleFileUpload = (event) => {
          //   const file = event.target.files[0];
          //   const formData = new FormData();
          //   console.log(file);
          //   formData.append("file", file);
        
          //   Axios.post("http://127.0.0.1:8000/testimage", formData, {
          //     // headers: {
          //     //   "Content-Type": "multipart/form-data",
          //     // },
          //   }).then((res) => {
          //       console.log(res.data);
          //     // setImageData(res.data); // La respuesta del backend es la imagen procesada en base64
          //   });
          // };









    return(

        <div className='seccion2'>
           
             <div>
             <img src={imageData} alt="Imagen" />
        {/* {imageData && <img src={imageData} alt="foto"></img>} */}
        

        <div>
                
                {/* <div className="galaxia" onMouseEnter={() => fetchImageData('gaussian_filter')}
                 onMouseLeave={setOriginal}
                style={{
                    // width: '100vw',
                    // height: '100vh',
                    // backgroundColor: 'blue',
                    backgroundImage: `url(${imageData})`,
                    // HASTA AHORA FUNCIONA EL ON Y OUT: TENGO QUE PONERLE EL BG
                    backgroundSize: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // position: 'absolute',
                    // backgroundAttachment: 'fixed',
                    // objectFit: 'cover',
                    // backgroundBlendMode:'multiply',

                    // overflow: 'visible',
                  }}>Gaussian</div> */}



                <button className="buttonHeader" onClick={() => fetchImageData('nofilter')}>Original</button>
                <button className="buttonHeader" onClick={() => fetchImageData('gaussian_filter')}>Gaussian</button>
                <button className="buttonHeader" onClick={() => fetchImageData('exp_filter')}>Exp</button>
                <button className="buttonHeader" onClick={() => fetchImageData('sin_filter')}>Sin</button>
                <button className="buttonHeader" onClick={() => fetchImageData('sqrt_filter')}>Sqrt</button>


                <input name='file' type="file" onChange={handleFileUpload} />
        
               
                     </div>
         {/* <img src={`data:image/png;base64,${imageData}`} alt="Imagen" /> */}
        
        <p>Esta imagen está retornada a una petición http al backend con FastAPI. La imagen es procesada a través de un filtro gausiano en un script en Python que hice en "Instrumentación Astronómica 2018". El concepto mediante el cual se realizan los filtros a las imágenes es poderoso para entender la decodificación de imagenes que el cerebro hace.
        </p><p>Establecer la conexión con el backend permite que esta imágen filtrada a través de una herrameinta sencilla sea un placeholder para luego convertirse en la visualización de modelos complejos.
        </p>

        </div>
        </div>
    );
};

export default Filtros;













//--------



  // fetchdata desde endpoints en backend
  // axios.get('/test')
  // .then(response => {
  //   // Manejar la respuesta exitosa aquí
  //   console.log(response.data); // Aquí tendrás los datos devueltos por el backend
  // })
  // .catch(error => {
  //   // Manejar errores aquí
  //   console.error('Error al realizar la solicitud:', error);
  // });


  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //   console.log(data);
  // });


  // const [catFact, setCatFact] = useState("");

  
  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //   setCatFact(res.data.fact);
  //   });
  // };

  // useEffect(() => {
  //   fetchCatFact();
  // }, []);
  // console.log({catFact});