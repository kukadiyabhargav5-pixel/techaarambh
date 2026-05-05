from PIL import Image, ImageChops
import sys

def crop_and_process(image_path, output_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    # 1. More aggressive cropping to remove white borders
    # Finding the bounding box of non-white content
    # We use a mask for pixels that are NOT white (or close to it)
    def is_not_white(pixel):
        return pixel[0] < 250 or pixel[1] < 250 or pixel[2] < 250

    # Get non-white bounding box manually to be sure
    width, height = img.size
    left, top, right, bottom = width, height, 0, 0
    
    pixels = img.load()
    found = False
    for y in range(height):
        for x in range(width):
            if is_not_white(pixels[x, y]):
                left = min(left, x)
                top = min(top, y)
                right = max(right, x)
                bottom = max(bottom, y)
                found = True
    
    if found:
        # Add a tiny 2px padding
        img = img.crop((max(0, left-2), max(0, top-2), min(width, right+2), min(height, bottom+2)))
    
    # 2. Make white background transparent
    datas = img.getdata()
    newData = []
    for item in datas:
        if item[0] > 245 and item[1] > 245 and item[2] > 245:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Aggressively cropped and processed logo saved to {output_path}")

if __name__ == "__main__":
    crop_and_process(sys.argv[1], sys.argv[2])
