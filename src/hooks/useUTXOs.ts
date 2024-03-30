import useSWR from "swr";
import { getUTXOs } from "@/api/btc";
import { BitcoinNetworkType } from "@/types/btc";

export function useUTXOs(network: BitcoinNetworkType, address: string) {
  const { data, error, isLoading } = useSWR([network, address], (params) =>
    getUTXOs(...params),
  );

  return {
    utxos: data,
    isLoading,
    isError: error,
  };
}
