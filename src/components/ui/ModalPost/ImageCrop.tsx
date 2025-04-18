import getCroppedImg from "@/utils/cropImage";
import React, { useState } from "react";
import Cropper from "react-easy-crop";

type ImageCropProps = {
  imagePreviewUrl: string;
  setCroppedFile: (file: File) => void;
  onNext: () => void;
  onBack: () => void;
};

const ImageCrop = ({
  imagePreviewUrl,
  setCroppedFile,
  onNext,
  onBack,
}: ImageCropProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropConfirm = async () => {
    if (!imagePreviewUrl || !croppedAreaPixels) return;

    try {
      const croppedFile = await getCroppedImg(
        imagePreviewUrl,
        croppedAreaPixels
      );
      setCroppedFile(croppedFile); 
      onNext();
    } catch (error) {
      console.error("Failed to crop image:", error);
    }
  };
  return (
    <div className="relative z-10 w-[692px] h-[692px] rounded-sm flex flex-col  animate-fade-in">
      {/* header */}
      <div className="h-[42px] bg-black text-white text-sm  z-20 flex items-center  justify-center font-semibold relative ">
        <button className="absolute left-5" onClick={onBack}>
          Back
        </button>
        <span>Crop</span>
        <button
          onClick={handleCropConfirm}
          className="text-blue-600 absolute right-5 "
        >
          Next
        </button>
      </div>
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center bg-neutral-800 cursor-pointer">
        <Cropper
          image={imagePreviewUrl}
          crop={crop}
          aspect={1}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>
    </div>
  );
};

export default ImageCrop;
