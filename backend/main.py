from filters import sin_filter, exp_filter, sqrt_filter, gaussian_filter
#, laplacian_filter, boxcar_filter, sharpen_filter
#custom_filter, test_filter
from fastapi import FastAPI
import imageio
import numpy as np
from i_to_base64 import i_to_base64
from fastapi.middleware.cors import CORSMiddleware


# Cargar la imagen y seleccionar una de las matrices
image_file = '/Users/nico/Desktop/progr/react-deploy/backend/galaxia.png'
f_color0 = imageio.imread(image_file, mode='RGB')
f_color = f_color0[0:590, :]

# Convertir a escala de grises
fr = f_color[:, :, 0]






app=FastAPI()


# Configurar las opciones de origen permitidos para CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
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


@app.get("/sin_filter")
def apply_sin_filter():
    return i_to_base64(sin_filter(fr))

@app.get("/exp_filter")
def apply_exp_filter():
    return i_to_base64(exp_filter(fr))

@app.get("/sqrt_filter")
def apply_sqrt_filter():
    return i_to_base64(sqrt_filter(fr))

@app.get("/gaussian_filter")
def apply_gaussian_filter():
    return i_to_base64(gaussian_filter(fr))

@app.post("/upload_image")
def apply_upload_image():
    return i_to_base64()
# @app.get("/boxcar_filter")
# def apply_boxcar_filter():
#     return i_to_base64(boxcar_filter(fr))


# @app.get("/sharpen_filter")
# def sharpen_filter():
#     return i_to_base64(sharpen_filter(fr))