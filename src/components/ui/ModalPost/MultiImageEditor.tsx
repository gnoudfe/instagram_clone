"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { usePhotoEditor } from "react-photo-editor";
import ImageAdjustment from "./ImageAdjustment";
import ImageFilterOptions from "./ImageFilterOptions";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type Props = {
  croppedFiles: File[];
  onBack: () => void;
  onConfirm: (editedFiles: File[], finalImages: string[]) => void;
};

const MultiImageEditor: React.FC<Props> = ({
  croppedFiles,
  onBack,
  onConfirm,
}) => {
  const [imageFilters, setImageFilters] = useState(() =>
    croppedFiles.map(() => "Original")
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const handleChangeStep = (step: number) => {
    setCurrentStep(step);
  };
  const currentFilter = imageFilters[activeIndex];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const editors = croppedFiles.map((file) => usePhotoEditor({ file }));

  const currentEditor = editors[activeIndex];

  const handleSetFilter = (filter: string) => {
    setImageFilters((prev) => {
      const newFilters = [...prev];
      newFilters[activeIndex] = filter;
      return newFilters;
    });
  };

  const handleConfirm = async () => {
    const results: File[] = [];
    const images: string[] = [];

    for (const editor of editors) {
      const canvas = editor.canvasRef.current;
      if (!canvas) continue;

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((blob) => resolve(blob), "image/png")
      );

      if (!blob) continue;

      const file = new File([blob], `edited-${Date.now()}.png`, {
        type: "image/png",
      });
      if (file) {
        const finalImageUrl = URL.createObjectURL(file);
        images.push(finalImageUrl);
      }
      results.push(file);
    }

    onConfirm(results, images);
  };

  return (
    <div className="flex flex-col">
      <div className="min-h-[42px] bg-black text-white  flex items-center justify-center font-semibold relative ">
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
      <div className="flex w-[1000px] z-50 inset relative animate-fade-in">
        {/* Swiper with canvases */}
        <div className="bg-neutral-600 w-full h-full max-w-[600px] aspect-[4/5] relative">
          <Swiper
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full h-full"
            allowTouchMove={false}
            modules={[Navigation]}
            navigation={{
              nextEl: `.btn-next-image-filter`,
              prevEl: `.btn-prev-image-filter`,
            }}
          >
            {editors.map((editor, idx) => (
              <SwiperSlide key={idx} className="w-full h-full">
                <div className="w-full h-full flex items-center justify-center bg-neutral-700">
                  {editor.imageSrc && (
                    <canvas
                      ref={editor.canvasRef}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <div className="btn-prev-image-filter w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 left-2 cursor-pointer">
              <ArrowLeftIcon color="#000" />
            </div>
            <div className="btn-next-image-filter  w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 right-2 cursor-pointer">
              <ArrowRightIcon color="#000" />
            </div>
          </div>
        </div>
        <div className="flex-1  bg-neutral-900">
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
              selectedFilter={currentFilter}
              setSelectedFilter={handleSetFilter}
              setBrightness={currentEditor.setBrightness}
              setContrast={currentEditor.setContrast}
              setSaturate={currentEditor.setSaturate}
              setGrayscale={currentEditor.setGrayscale}
            />
          )}
          {currentStep === 2 && (
            <ImageAdjustment
              brightness={currentEditor.brightness}
              setBrightness={currentEditor.setBrightness}
              contrast={currentEditor.contrast}
              setContrast={currentEditor.setContrast}
              saturate={currentEditor.saturate}
              setSaturate={currentEditor.setSaturate}
              grayscale={currentEditor.grayscale}
              setGrayscale={currentEditor.setGrayscale}
              rotate={currentEditor.rotate}
              setRotate={currentEditor.setRotate}
              flipHorizontal={currentEditor.flipHorizontal}
              setFlipHorizontal={currentEditor.setFlipHorizontal}
              flipVertical={currentEditor.flipVertical}
              setFlipVertical={currentEditor.setFlipVertical}
              reset={currentEditor.resetFilters}
              zoom={currentEditor.zoom}
              setZoom={currentEditor.setZoom}
              setSelectedFilter={handleSetFilter}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiImageEditor;
