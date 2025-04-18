import React from "react";

interface ImageAdjustmentProps {
  brightness: number;
  setBrightness: (brightness: number) => void;
  contrast: number;
  setContrast: (contrast: number) => void;
  saturate: number;
  setSaturate: (saturate: number) => void;
  grayscale: number;
  setGrayscale: (grayscale: number) => void;
  rotate: number;
  setRotate: (rotate: number) => void;
  flipHorizontal: boolean;
  setFlipHorizontal: (flipHorizontal: boolean) => void;
  flipVertical: boolean;
  setFlipVertical: (flipVertical: boolean) => void;
  reset: () => void;
  setSelectedFilter: (filter: string) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
}

const ImageAdjustment = ({
  brightness,
  setBrightness,
  contrast,
  setContrast,
  saturate,
  setSaturate,
  grayscale,
  setGrayscale,
  rotate,
  setRotate,
  flipHorizontal,
  setFlipHorizontal,
  flipVertical,
  setFlipVertical,
  reset,
  setSelectedFilter,
  zoom,
  setZoom,
}: ImageAdjustmentProps) => {
  return (
    <div className="p-5 w-full animate-fade-in">
      <div className="w-full flex flex-col gap-4">
        <label>Brightness</label>
        <input
          className="accent-white w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-neutral-600"
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
        <label>Contrast</label>
        <input
          className="accent-white w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-neutral-600"
          type="range"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => setContrast(Number(e.target.value))}
        />
        <label>Saturation</label>
        <input
          className="accent-white w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-neutral-600"
          type="range"
          min="0"
          max="200"
          value={saturate}
          onChange={(e) => setSaturate(Number(e.target.value))}
        />
        <label>Grayscale</label>
        <input
          className="accent-white w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-neutral-600"
          type="range"
          min="0"
          max="200"
          value={grayscale}
          onChange={(e) => setGrayscale(Number(e.target.value))}
        />
        <label>Rotate</label>
        <input
          className="accent-white w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-neutral-600"
          type="range"
          min="0"
          max="360"
          value={rotate}
          onChange={(e) => setRotate(Number(e.target.value))}
        />
         <label>Zoom</label>
        <input
          className="accent-white w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-neutral-600"
          type="range"
          min="0.1"
          step={0.1}
          max="3"
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
        <div className="w-full flex items-center justify-center gap-2">
          <div
            className="w-[30px] h-[30px]  bg-white rounded-md cursor-pointer"
            onClick={() => setFlipHorizontal(!flipHorizontal)}
          >
            <img
              src="/flip-horizontal-svgrepo-com.svg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div
            className="w-[30px] h-[30px]  bg-white rounded-md cursor-pointer"
            onClick={() => setFlipVertical(!flipVertical)}
          >
            <img
              src="/flip-vertical-svgrepo-com.svg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div
            className="w-[30px] h-[30px]  bg-white rounded-md cursor-pointer"
            onClick={() => {
              reset();
              setSelectedFilter("Original");
            }}
          >
            <img
              src="/reset.svg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAdjustment;
