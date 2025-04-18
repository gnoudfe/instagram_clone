"use client";
import React, { useState } from "react";
import { usePhotoEditor } from "react-photo-editor";
import ImageFilterOptions from "./ImageFilterOptions";
import ImageAdjustment from "./ImageAdjustment";

type ImageFilterProps = {
  croppedFile: File | null;
  onBack: () => void;
  onConfirm: (finalImage: string, file: File) => void;
};

const ImageFilter: React.FC<ImageFilterProps> = ({
  croppedFile,
  onBack,
  onConfirm,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("Original");
  const handleChangeStep = (step: number) => {
    setCurrentStep(step);
  };

  const {
    canvasRef,
    imageSrc,
    brightness,
    setBrightness,
    contrast,
    setContrast,
    saturate,
    setSaturate,
    grayscale,
    zoom,
    setZoom,
    setGrayscale,
    rotate,
    setRotate,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    flipHorizontal,
    setFlipHorizontal,
    flipVertical,
    setFlipVertical,
    resetFilters,
  } = usePhotoEditor({ file: croppedFile! }); 

  const handleConfirm = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (!blob) return;
      const editedFile = new File([blob], `edited-image-${Date.now()}.png`, {
        type: "image/png",
      });
      console.log("editedFile", editedFile);

      const finalImageUrl = URL.createObjectURL(editedFile);
      onConfirm(finalImageUrl, editedFile);
    }, "image/png");
  };

  return (
    <div className="relative z-10 w-full max-w-[1072px] h-[775px] rounded-sm flex flex-col animate-fade-in">
      <div className="h-[42px] bg-black text-white  flex items-center justify-center font-semibold relative ">
        <span> Edit</span>

        <button className="absolute left-5 " onClick={onBack}>
          ← Back
        </button>
        <button
          className="absolute right-5 text-blue-600"
          onClick={handleConfirm}
        >
          Next
        </button>
      </div>

      <div className="flex w-full h-full">
        <div className="flex-1">
          <div className="w-full h-full bg-neutral-600 relative">
            {imageSrc && (
              <canvas
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  touchAction: "none",
                }}
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
              />
            )}
          </div>
        </div>

        <div className="w-[330px] bg-neutral-900 h-full relative">
          <div className="flex w-full items-center justify-center border-b border-zinc-700">
            <div
              className={`w-1/2 text-center p-3 cursor-pointer text-base font-normal transition-all relative  ${
                currentStep === 1 ? " text-white" : " text-[#919191]"
              }`}
              onClick={() => handleChangeStep(1)}
            >
              Filters
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-opacity duration-300  ${
                  currentStep === 1 ? "opacity-1" : "opacity-0"
                }`}
              ></div>
            </div>
            <div
              className={`w-1/2 text-center p-3 cursor-pointer text-base font-normal transition-all relative  ${
                currentStep === 2 ? " text-white" : " text-[#919191]"
              }`}
              onClick={() => handleChangeStep(2)}
            >
              Adjustments
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-opacity duration-300  ${
                  currentStep === 2 ? "opacity-1" : "opacity-0"
                }`}
              ></div>
            </div>
          </div>
          {currentStep === 1 && (
            <ImageFilterOptions
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              setBrightness={setBrightness}
              setContrast={setContrast}
              setSaturate={setSaturate}
              setGrayscale={setGrayscale}
            />
          )}
          {currentStep === 2 && (
            <ImageAdjustment
              brightness={brightness}
              setBrightness={setBrightness}
              contrast={contrast}
              setContrast={setContrast}
              saturate={saturate}
              setSaturate={setSaturate}
              grayscale={grayscale}
              setGrayscale={setGrayscale}
              rotate={rotate}
              setRotate={setRotate}
              flipHorizontal={flipHorizontal}
              setFlipHorizontal={setFlipHorizontal}
              flipVertical={flipVertical}
              setFlipVertical={setFlipVertical}
              reset={resetFilters}
              setSelectedFilter={setSelectedFilter}
              zoom={zoom}
              setZoom={setZoom}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageFilter;
