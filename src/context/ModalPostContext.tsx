'use client';
import { createContext, useContext, useState } from 'react';

interface ModalPostContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  showAlertModal: boolean;
  confirmCloseModal: () => void;
  setShowAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalPostContext = createContext<ModalPostContextType | undefined>(undefined);

export const ModalPostProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const openModal = () => {
    if (showAlertModal) {
      setShowAlertModal(false);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    if (step >= 2) {
      setShowAlertModal(true);
    } else {
      setIsOpen(false);
      setStep(1);
    }
  };

  const confirmCloseModal = () => {
    setIsOpen(false);
    setStep(1);
  };

  return (
    <ModalPostContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        step,
        handleNext,
        handleBack,
        showAlertModal,
        setShowAlertModal,
        confirmCloseModal,
      }}
    >
      {children}
    </ModalPostContext.Provider>
  );
};

export const usePostModal = () => {
  const context = useContext(ModalPostContext);
  if (!context) {
    throw new Error('usePostModal must be used within a ModalPostProvider');
  }
  return context;
};
