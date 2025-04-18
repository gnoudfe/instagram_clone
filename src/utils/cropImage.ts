import { Area } from "react-easy-crop";

export default function getCroppedImg(
  imageSrc: string,
  crop: Area,
  fileName = "cropped.jpg"
): Promise<File> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas context not available"));
        return;
      }

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Failed to create blob from canvas"));
          return;
        }

        const file = new File([blob], fileName, { type: "image/jpeg" });
        resolve(file);
      }, "image/jpeg");
    };

    image.onerror = () => {
      reject(new Error("Failed to load image"));
    };
  });
}
