import type { ReactNode } from "react";
import { ChainslakeContext } from "./ChainslakeContext";
import {
  MetabaseProvider,
  defineMetabaseAuthConfig,
} from "@metabase/embedding-sdk-react";

type ChainslakeContainerProps = {
  url: string;
  children: ReactNode;
};

export const ChainslakeContainer = ({ url, children }: ChainslakeContainerProps) => {
  const config = defineMetabaseAuthConfig({
    metabaseInstanceUrl: url,
    apiKey: "test"
  });

  return (
    <ChainslakeContext.Provider value={{ url }}>
      <MetabaseProvider authConfig={config} >
        {children}
      </MetabaseProvider>
    </ChainslakeContext.Provider>
  );
};
