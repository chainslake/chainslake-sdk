import { createContext, useContext } from "react";

type ChainslakeContextType = {
  url: string;
};

export const ChainslakeContext = createContext<ChainslakeContextType | null>(null);

export const useChainslake = () => {
  const context = useContext(ChainslakeContext);
  if (!context) {
    throw new Error("useChainslake must be used within a ChainslakeProvider");
  }
  return context;
};
