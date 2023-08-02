from filters import sin_filter, exp_filter, sqrt_filter, gaussian_filter
#, laplacian_filter, boxcar_filter, sharpen_filter
#custom_filter, test_filter
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import RedirectResponse
import imageio
import numpy as np
from i_to_base64 import i_to_base64
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# Cargar imagen que envíe el frontend:
import os
UPLOAD_DIR = "temp_images"
from PIL import Image
import io

# # # Cargar la imagen y seleccionar una de las matrices
# image_file = '/Users/nico/Desktop/progr/react-deploy/backend/galaxia.png'
# f_color0 = imageio.imread(image_file, mode='RGB')
# f_color = f_color0[0:590, :]

# # Convertir a escala de grises
# fr = f_color[:, :, 0]
uploaded_image = None

def load_precached_image():
    global uploaded_image
    with open("./galaxia.png", "rb") as f:
        image_data = f.read()
    image = Image.open(io.BytesIO(image_data))
    grayscale_image = image.convert('L')
    uploaded_image = np.array(grayscale_image)
    print(uploaded_image)

load_precached_image()






app=FastAPI()


app.mount("/", StaticFiles(directory="./"), name="static")



# Configurar las opciones de origen permitidos para CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://nicosquiroz.com",
]

# Agregar el middleware de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.get('/test')
# def test():
#     img_bytes = i_to_base64(fr)
#     return StreamingResponse(io.BytesIO(img_bytes), media_type="image/png")




@app.get("/", include_in_schema=False)
def index():
    return RedirectResponse("/docs", status_code=308)



@app.get("/apply_filter/{filter_name}")
async def apply_filter(filter_name: str):
    # Cargar la imagen desde la ubicación donde se almacenó previamente
    global uploaded_image
    filtered_image= None
    print(uploaded_image)
    # if uploaded_image is None:
    #     uploaded_image = fr
    # with open("uploaded_image.png", "rb") as f:
    #     image_data = f.read()
    
    # Aplicar el filtro deseado a la imagen
    if filter_name == "nofilter":
        print(uploaded_image)
        filtered_image = i_to_base64(uploaded_image)
    elif filter_name == "gaussian_filter":
        filtered_image = i_to_base64(gaussian_filter(uploaded_image))
    elif filter_name == "sin_filter":
        filtered_image = i_to_base64(sin_filter(uploaded_image))
    elif filter_name == "sqrt_filter":
        filtered_image = i_to_base64(sqrt_filter(uploaded_image))
    elif filter_name == "exp_filter":
        filtered_image = i_to_base64(exp_filter(uploaded_image))
    
    # Devolver la imagen filtrada
    return filtered_image



# @app.get("/sin_filter")
# def apply_sin_filter():
#     return i_to_base64(sin_filter(fr))

# @app.get("/exp_filter")
# def apply_exp_filter():
#     return i_to_base64(exp_filter(fr))

# @app.get("/sqrt_filter")
# def apply_sqrt_filter():
#     return i_to_base64(sqrt_filter(fr))

# @app.get("/gaussian_filter")
# def apply_gaussian_filter():
#     return i_to_base64(gaussian_filter(fr))   <- ENTRA

# @app.post("/upload_image")
# def apply_upload_image():
#     return i_to_base64() ____> hacer esta que sea fr!


@app.post("/testimage")

    #test1: 
    # def testpost():
    #   funcionó. return i_to_base64(sin_filter(fr))
    #test2: devolver directamente un filtro:
    # image_data = await file.read()
    #test2:
    
async def testpost(file: UploadFile = File(...)):
    global uploaded_image
    image_data = await file.read()
    # # Crear una imagen desde los datos recibidos
    image = Image.open(io.BytesIO(image_data))
    # image.show()
    # Transformrla a escla de grises, y a np.array para que lo lea "i_to_base64"
    grayscale_image = image.convert('L')
    # grayscale_image.show()

    # la imagen se carga en global upload_image
    uploaded_image = np.array(grayscale_image)

    # print("hola, este mensaje viene del backend")
    # print(type(fr))
    # print(type(grayscale_image))
    print(uploaded_image)
    return i_to_base64(uploaded_image)

   #recordar que para test 2 tengo que transormar la imagen desde el frontend a escala de grises y seleccionar uno
    #de los colores rgb, como lo hice con el archivo galaxia.png






    # # #     # Guardar la imagen procesada en un archivo temporal
    #     with open("file.png", "wb") as f:
    #         await f.write(file)

    #     return i_to_base64(sin_filter(f_gray))
    # return {"message": "Image uploaded successfully"}
    # # i_to_base64(gaussian_filter(fr))



    

@app.post("/upload_image/")
async def upload_image(file: UploadFile = File(...)):
        
        # file_path = os.path.join(UPLOAD_DIR, file.filename)
        
        # async with open(file_path, "wb") as f:
        #     image_data = await file.read()  # Leer el contenido del archivo
        #     # image = Image.open(io.BytesIO(image_data))
        #     # grayscale_image = image.convert('L')
        #     # image = np.array(grayscale_image)
        #     await f.write(image)
        
        # with open(file_path, "wb") as f:
        #     f.write(await file.read())
        return {"message": "upload_image"}
        
    #     file_content = await file.read()
    # # try:
    #     # # Procesar la imagen y aplicar los filtros
    #     # processed_image = process_image(file)

    #     # Guardar la imagen procesada en un archivo temporal
    #     with open("file.png", "wb") as f:
    #         f.write(file)
    #     return {"message": "Image uploaded successfully"}

        # Retornar la imagen procesada como archivo binario
        # return FileResponse("processed_image.png", media_type="image/png") -> SALE
    # except Exception as e:
    #     return JSONResponse(content={"error": str(e)}, status_code=500)
    



# @app.get("/boxcar_filter")
# def apply_boxcar_filter():
#     return i_to_base64(boxcar_filter(fr))


# @app.get("/sharpen_filter")
# def sharpen_filter():
#     return i_to_base64(sharpen_filter(fr))