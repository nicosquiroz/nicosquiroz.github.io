from scipy import ndimage
import numpy as np
import matplotlib.pyplot as plt
import imageio

#transferencia de imágenes en API


def sin_filter(matrix):
    return  255 * np.sin(np.pi / 2 * matrix / 255)
    
def exp_filter(matrix):
    return 255 * np.exp(matrix / 255) / np.e

def sqrt_filter(matrix):
    return 255 * np.sqrt(matrix / 255)

def gaussian_filter(matrix):
    return ndimage.gaussian_filter(matrix, sigma=15)

def laplacian_filter(matrix, kernel):
    return ndimage.filters.convolve(matrix, kernel, mode='mirror')

def boxcar_filter(matrix, kernel):
    return ndimage.filters.convolve(matrix, kernel, mode='mirror')

def sharpen_filter(matrix):
    I = np.array([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
    I_convolved = 255 * (2 * ndimage.filters.convolve(matrix, I, mode='mirror')) / np.amax(2 * ndimage.filters.convolve(matrix, I, mode='mirror'))
    return I_convolved - 255 * ndimage.gaussian_filter(matrix, sigma=15) / np.amax(ndimage.gaussian_filter(matrix, sigma=15))

# # Cargar la imagen y seleccionar una de las matrices
# image_file = '/backend/galaxia.png'
# f_color0 = imageio.imread(image_file, mode='RGB')
# f_color = f_color0[0:590, :]

# # Convertir a escala de grises
# fr = f_color[:, :, 0]

# Aplicar los filtros a las matrices
# fr_sin = sin_filter(fr)
# fr_exp = exp_filter(fr)
# fr_sq = sqrt_filter(fr)
# fr_gauss = gaussian_filter(fr)

# fr_sharp = sharpen_filter(fr)



# fr_lpc = apply_laplacian_filter(fr, matriz_lpc)
# fr_lpc2 = apply_laplacian_filter(fr, matriz_lpc2)
# fr_lpc3 = apply_laplacian_filter(fr, matriz_lpc3)
# fr_bc = apply_boxcar_filter(fr, matriz_bc)



# Mostrar las imágenes resultantes
# for f in [fr_sin, fr_exp, fr_sq, fr_gauss, fr_sharp]:
#     plt.imshow(f, cmap='gray')
#     plt.colorbar()
#     plt.show()