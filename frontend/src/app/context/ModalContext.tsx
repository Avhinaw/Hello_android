// context/ModalContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the shape of your context
interface ModalContextType {
  showSettingsModal: boolean;
  toggleModal: () => void;
  closeModal: () => void;
}

// 2. Create a default context value (optional if you use undefined check)
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 3. Type the provider props
interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const toggleModal = () => setShowSettingsModal(prev => !prev);
  const closeModal = () => setShowSettingsModal(false);

  return (
    <ModalContext.Provider value={{ showSettingsModal, toggleModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 4. Custom hook with type-safe error handling
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
