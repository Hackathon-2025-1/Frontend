"use client";
import React, { createContext, useContext } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastContextType = {
  showToast: (message: string, options?: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const showToast = (message: string, options?: ToastOptions) => {
    toast(message, options);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de ToastProvider");
  }
  return context;
};