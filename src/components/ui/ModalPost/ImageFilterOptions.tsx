import React from 'react';

const filters = [
  { name: 'Original', value: 'none' },
  {
    name: 'Icy Water',
    value:
      'brightness(104%) contrast(104%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
    grayscale: 0,
    brightness: 104,
    contrast: 104,
    saturate: 122,
  },
  {
    name: 'Sweet Sunset',
    value:
      ' contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
    grayscale: 0,
    brightness: 100,
    contrast: 128,
    saturate: 120,
  },
  {
    name: 'Burnt Cofffe',
    value:
      'contrast(80%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
    grayscale: 100,
    brightness: 100,
    contrast: 80,
    saturate: 100,
  },
  {
    name: 'Ocean Wave',
    value:
      'brightness(105%) contrast(104%) grayscale(10%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
    grayscale: 10,
    brightness: 105,
    contrast: 104,
    saturate: 100,
  },
  {
    name: 'Summer Heal',
    value: ' grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(0%)',
    grayscale: 50,
    brightness: 100,
    contrast: 100,
    saturate: 140,
  },
  {
    name: 'Lark',
    value:
      'brightness(120%) contrast(120%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(150%)',
    grayscale: 0,
    brightness: 120,
    contrast: 120,
    saturate: 150,
  },
  {
    name: 'Juno',
    value:
      'brightness(70%) contrast(140%) grayscale(40%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%)',
    grayscale: 40,
    brightness: 70,
    contrast: 140,
    saturate: 120,
  },
];

interface ImageFilterProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  setBrightness: (brightness: number) => void;
  setContrast: (contrast: number) => void;
  setSaturate: (saturate: number) => void;
  setGrayscale: (grayscale: number) => void;
}

const ImageFilterOptions = ({
  selectedFilter,
  setSelectedFilter,
  setBrightness,
  setContrast,
  setSaturate,
  setGrayscale,
}: ImageFilterProps) => {
  return (
    <div className="p-5 w-full grid grid-cols-2 gap-4 animate-fade-in">
      {filters.map((filter: any) => (
        <div
          key={filter.name}
          className="w-full flex flex-col gap-2 items-center justify-center cursor-pointer"
          //   onClick={() => onSelectFilter(filter.value)}
          onClick={() => {
            setSelectedFilter(filter.name);
            setBrightness(filter.brightness);
            setContrast(filter.contrast);
            setSaturate(filter.saturate);
            setGrayscale(filter.grayscale);
          }}
        >
          <div className="w-full h-full">
            <img
              src="https://www.photo.gallery/content/blog/image-size-quality-photo-gallery-websites/low-detail-2560px-70q.jpg"
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: filter.value }}
            />
          </div>
          <span
            className={`text-sm transition-all duration-300 ${
              selectedFilter === filter.name ? 'text-blue-600' : 'text-zinc-400'
            }`}
          >
            {filter.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ImageFilterOptions;
