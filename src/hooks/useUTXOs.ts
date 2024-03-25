import useSWR from "swr";
import { getUTXOs } from "@/api/btc";
import { BitcoinNetworkType } from "@/types/btc";

export function useUTXOs(network: BitcoinNetworkType, address: string) {
  const { data, error, isLoading } = useSWR("/api/btc/get-utxos", () =>
    getUTXOs(network, address),
  );

  return {
    utxos: data,
    isLoading,
    isError: error,
  };
}
