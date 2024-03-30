"use client";
import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useUTXOs } from "@/hooks/useUTXOs";
import { BitcoinNetworkType } from "@/types/btc";

interface IProps {
  network: BitcoinNetworkType;
  address: string;
}

const PSBTList: FC<IProps> = ({ network, address }) => {
  const { utxos, isError, isLoading } = useUTXOs(network, address);

  if (isError) {
    return (
      <div className="container flex justify-self-center items-center">
        {isError.message}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    );
  }

  return (
    <ul className="w-full flex flex-col gap-y-4">
      <li></li>
    </ul>
  );
};

export default PSBTList;
