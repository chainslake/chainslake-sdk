import { ChainslakeContainer } from "./ChainslakeContainer"
import { ChainslakeStatus } from "./ChainslakeStatus"

type ChainslakeUIProps = {
  url: string;
  id: string;
};

export const ChainslakeUI = ({ url, id }: ChainslakeUIProps) => {

  return (
    <div style={{width: "550px"}}>
      <ChainslakeContainer url={url}>
        <ChainslakeStatus id={id}></ChainslakeStatus>
      </ChainslakeContainer>
    </div>
  );
};
