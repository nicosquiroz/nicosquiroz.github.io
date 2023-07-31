import io
import base64
from fastapi.responses import StreamingResponse
from PIL import Image

def i_to_base64(image):
    img_pil = Image.fromarray(image.astype('uint8'))
    buffer = io.BytesIO()
    img_pil.save(buffer, format="PNG")
    img_bytes = buffer.getvalue()
    buffer.close()
    #incluyo en la función de transformación al StreamingResponse para no repetirlo en cada endpoint
    return StreamingResponse(io.BytesIO(img_bytes), media_type="image/png")
