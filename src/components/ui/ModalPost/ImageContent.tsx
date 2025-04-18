import React, { useEffect, useState } from "react";

const Visiblity = [
  {
    id: 1,
    value: "Public",
  },
  {
    id: 2,
    value: "Friends",
  },
  {
    id: 3,
    value: "Private",
  },
];

const ImagePreview = ({ file }: { file: File }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // Clean up khi component unmount hoặc file thay đổi
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  if (!previewUrl) return null;

  return (
    <div className="mt-4">
      <img
        src={previewUrl}
        alt="Preview"
        className="max-w-full h-auto rounded"
      />
    </div>
  );
};

interface ImageContentProps {
  finalImage: string | null;
  finalFile: File | null;
}

const ImageContent = ({ finalImage, finalFile }: ImageContentProps) => {
  const [showVisiblity, setShowVisiblity] = React.useState(false);
  // Thành
  const [currentVisiblity, setCurrentVisiblity] = React.useState(
    Visiblity[0].value
  );

  const handlePost = () => {
    console.log("finalFile", finalFile);
  };

  const handleShowVisiblity = () => {
    setShowVisiblity(!showVisiblity);
  };

  const handleSelectVisiblity = (value: string) => {
    setCurrentVisiblity(value);
  };

  return (
    <div className="relative z-10 w-full max-w-[1072px] h-[775px] rounded-sm flex flex-col animate-fade-in">
      {/* header */}
      <div className="h-[42px] bg-black text-white  flex items-center justify-center font-semibold relative ">
        <span> Create new post</span>

        <span
          className="text-sm absolute right-5 text-blue-700 cursor-pointer"
          onClick={handlePost}
        >
          Share
        </span>
      </div>
      {/* content */}
      <div className="flex h-full">
        <div className="max-w-[692px]  bg-neutral-800">
          <img
            src={finalImage || ""}
            alt="finalImage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 bg-neutral-900 h-full">
          <div className="flex items-center gap-2 p-5">
            <img
              src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
              alt=""
              className="w-[28px] h-[28px] object-cover rounded-full"
            />
            <span className="text-sm text-white ">duongg</span>
          </div>
          <textarea
            placeholder="What's on your mind?"
            maxLength={300}
            autoFocus
            name=""
            id=""
            className="w-full h-full p-5 bg-transparent text-white border-none outline-none max-h-[200px]  overflow-hidden resize-none"
          ></textarea>

          <div className="w-full p-5 flex flex-col gap-2 border-t-neutral-700 border-t">
            <div
              className="w-full cursor-pointer flex items-center justify-between"
              onClick={handleShowVisiblity}
            >
              <span>Visibility</span>
              <div
                className={
                  showVisiblity
                    ? "rotate-0 transition-all"
                    : "rotate-180 transition-all"
                }
              >
                <svg
                  aria-label="Down chevron icon"
                  fill="currentColor"
                  height="16"
                  role="img"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <title>Down chevron icon</title>
                  <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                </svg>
              </div>
            </div>
            {showVisiblity && (
              <div className="flex w-full flex-col gap-2 ">
                {Visiblity.map((item) => (
                  <div
                    className="w-full flex items-center justify-between cursor-pointer"
                    key={item.id}
                    onClick={() => handleSelectVisiblity(item.value)}
                  >
                    <span className="text-sm text-white">{item.value}</span>
                    <div
                      className={`w-[16px] h-[16px] border border-white rounded-full cursor-pointer ${
                        currentVisiblity === item.value ? "bg-white" : ""
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
