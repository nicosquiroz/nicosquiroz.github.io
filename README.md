

#Avances

-Incorporé el boton "Música/Ciencia". El objetivo es poder entregar más información técnica para cada una de las áreas. El siguiente paso es probar el resaltado de la información seleccionada y desvanecimiento del texto e imágenes del tema contrario.

-Colocar temas en etiqueta aside

-Colocar botones en el footer solo para Móvil - Listo (lo hice como sticky header)

29/Jul

- Diseño de la página (CSS)
- Hipervínculos
- Implementación de reproducción de sonido con "isPlaying", y cambio en CSS en la página durante reproducción (Sound.playing {})
- Nueva sección "El juego del futuro"

Ahora:
- Iniciar backend en FastAPI. Objetivo: petición de datos para interactuar con su visualización en la interfaz.
- Voy a hacer un test de unir React - FastAPI con un algoritmo en Python que hice en un curso de astronomía.

1/Ago
- **Test exitoso.** En la primera etapa (en local), pude conectar Backend con Frontend a través de endpoints GET, cada uno con un filtro diferente que se aplica a una imagen en el algoritmo de python. La imagen "galaxia.png" es cargada en el backend, en el directorio principal.
- Después de confirmar el funcionamiento de todos los filtros, agregué un <input> para poder cargar cualquier imagen, y un endpoint POST para recibirla. La imagen se almacena en una variable global, por lo que después se pueden hacer peticiones para aplicar los filtros a esa imagen cargada.
  
Mayor obstaculo: las imágenes que eran recibidas en @app.post estaban en un formato diferente que las cargadas directamente, por lo que las funciones de filtro entregaban otro tipo de datos y la información de vuelta a React no podía ser leída correctamente.
      
- Luego, desplegué el backend en Railway.app. Se pueden usar los filtros y cargar imagenes en el servidor.
- Siguiente: La imagen cargada queda guardada en el servidor y no se reinicia. Usé un "useState" para que al cargarse por primera vez la página cargue una imagen por defecto, pero aún no funciona. Y ajustar css para contener cualquier imagen en el mismo espacio.

      






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
