"use client";
import getCroppedImg from "@/utils/cropImage";
import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type ImageCropProps = {
  imagePreviewUrls: string[];
  setCroppedFiles: (files: File[]) => void;
  onNext: () => void;
  onBack: () => void;
};

const MultiImageCrop = ({
  imagePreviewUrls,
  setCroppedFiles,
  onNext,
  onBack,
}: ImageCropProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cropStates, setCropStates] = useState(
    imagePreviewUrls.map(() => ({
      crop: { x: 0, y: 0 },
      zoom: 1,
      croppedAreaPixels: null,
    }))
  );

  const onCropChange = (crop: any) => {
    const newStates = [...cropStates];
    newStates[currentIndex].crop = crop;
    setCropStates(newStates);
  };

  const onZoomChange = (zoom: number) => {
    const newStates = [...cropStates];
    newStates[currentIndex].zoom = zoom;
    setCropStates(newStates);
  };

  const onCropComplete = useCallback(
    (_: any, croppedAreaPixels: any) => {
      const newStates = [...cropStates];
      newStates[currentIndex].croppedAreaPixels = croppedAreaPixels;
      setCropStates(newStates);
    },
    [cropStates, currentIndex]
  );

  const handleCropConfirm = async () => {
    const croppedFiles: File[] = [];

    for (let i = 0; i < imagePreviewUrls.length; i++) {
      const { croppedAreaPixels } = cropStates[i];

      if (croppedAreaPixels) {
        const cropped = await getCroppedImg(
          imagePreviewUrls[i],
          croppedAreaPixels,
          `crop-image${[i]}`
        );
        croppedFiles.push(cropped);
      } else {
        try {
          const res = await fetch(imagePreviewUrls[i]);
          const blob = await res.blob();
          const originalFile = new File([blob], `original-image-${i}.png`, {
            type: blob.type,
          });
          croppedFiles.push(originalFile);
        } catch (error) {
          console.error(`Error handling original image at index ${i}:`, error);
        }
      }
    }
    console.log("cropFiles", croppedFiles);
    setCroppedFiles(croppedFiles);

    onNext();
  };

  return (
    <div className="relative w-[600px]  flex flex-col rounded bg-neutral-900 text-white animate-fade-in">
      {/* Header */}
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

      {/* Swiper */}
      <div className="flex-1 relative">
        <Swiper
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          slidesPerView={1}
          allowTouchMove={false}
          modules={[Navigation]}
          navigation={{
            nextEl: `.btn-next-image`,
            prevEl: `.btn-prev-image`,
          }}
        >
          {imagePreviewUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full  aspect-[4/5] bg-neutral-800">
                <Cropper
                  image={url}
                  crop={cropStates[index].crop}
                  zoom={cropStates[index].zoom}
                  aspect={4/5} // Instagram post ratio
                  onCropChange={onCropChange}
                  onZoomChange={onZoomChange}
                  onCropComplete={onCropComplete}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="btn-prev-image w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 left-2 cursor-pointer">
            <ArrowLeftIcon color="#000" />
          </div>
          <div className="btn-next-image  w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 right-2 cursor-pointer">
            <ArrowRightIcon color="#000" />
          </div>
        </div>
      </div>

      {/* Zoom Slider */}
      {/* <div className="px-6 py-4">
        <Slider
          min={1}
          max={3}
          step={0.1}
          value={cropStates[currentIndex]?.zoom || 1}
          onChange={(_, zoom) => onZoomChange(zoom as number)}
        />
      </div> */}
    </div>
  );
};

export default MultiImageCrop;
