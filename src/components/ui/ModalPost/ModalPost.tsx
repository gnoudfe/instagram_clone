"use client";
import { usePostModal } from "@/context/ModalPostContext";
import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import ImageCrop from "./ImageCrop";
import ImageFilter from "./ImageFilter";
import ImageContent from "./ImageContent";
import ModalAlert from "./ModalAlert";
import MultiImageCrop from "./ImageCrop";

const ModalPost = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [croppedFile, setCroppedFile] = useState<File | null>(null);
  const {
    isOpen,
    closeModal,
    step,
    handleNext,
    handleBack,
    showAlertModal,
    confirmCloseModal,
  } = usePostModal();
  const [finalImage, setFinalImage] = useState<string | null>(null);
  const [finalFile, setFinalFile] = useState<File | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <>
      {showAlertModal && (
        <ModalAlert
          message="Discard posts?"
          subMessage="If you leave, your edit won't be saved."
          onClose={confirmCloseModal}
        />
      )}
      <div className="fixed inset-0 z-40 flex items-center justify-center animate-fade-in">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={closeModal}
        />
        {step === 1 && (
          <ImageUpload
            onNext={handleNext}
            setImagePreviewUrl={setImagePreviewUrl}
          />
        )}
        {step === 2 && imagePreviewUrl && (
          <MultiImageCrop
            imagePreviewUrl={imagePreviewUrl}
            setCroppedFile={setCroppedFile}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && croppedFile && (
          <ImageFilter
            croppedFile={croppedFile}
            onBack={handleBack}
            onConfirm={(finalImage, file) => {
              setFinalImage(finalImage);
              setFinalFile(file);
              handleNext();
            }}
          />
        )}
        {step === 4 && finalImage && finalFile && (
          <ImageContent finalImage={finalImage} finalFile={finalFile} />
        )}
      </div>
    </>
  );
};

export default ModalPost;
