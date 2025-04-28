'use client';
import { usePostModal } from '@/context/ModalPostContext';
import React, { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageContent from './ImageContent';
import ModalAlert from './ModalAlert';
import MultiImageCrop from './ImageCrop';
import MultiImageEditor from './MultiImageEditor';

const ModalPost = () => {
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [croppedFiles, setCroppedFiles] = useState<File[]>([]);
  const { isOpen, closeModal, step, handleNext, handleBack, showAlertModal, confirmCloseModal } =
    usePostModal();
  const [finalImage, setFinalImage] = useState<string[]>([]);
  const [finalFile, setFinalFile] = useState<File[]>([]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);

  const handleConfirmEdit = (editedFiles: File[], finalImages: string[]) => {
    setFinalFile(editedFiles);
    setFinalImage(finalImages);
    handleNext();
  };

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
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeModal} />
        {step === 1 && (
          <ImageUpload onNext={handleNext} setImagePreviewUrls={setImagePreviewUrls} />
        )}
        {step === 2 && imagePreviewUrls && (
          <MultiImageCrop
            imagePreviewUrls={imagePreviewUrls}
            setCroppedFiles={setCroppedFiles}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && croppedFiles && (
          <MultiImageEditor
            croppedFiles={croppedFiles}
            onBack={handleBack}
            onConfirm={handleConfirmEdit}
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
