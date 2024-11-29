import { useBlocks } from "../hooks/useBlocks";

export const BlockData = () => {
  const { blockNumber } = useBlocks();

  return (
    <div className="text-xl animate-pulse">
      Current Block: {blockNumber ?? "-"}
    </div>
  );
};
