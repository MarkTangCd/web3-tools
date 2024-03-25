import { BitcoinNetworkType, MempoolUTXO } from "@/types/btc";
import axios from "axios";

export async function getUTXOs(
  network: BitcoinNetworkType,
  address: string,
): Promise<MempoolUTXO[]> {
  const networkSubpath =
    network === BitcoinNetworkType.Testnet ? "/testnet" : "";
  const url = `https://mempool.space${networkSubpath}/api/address/${address}/utxo`;
  const res = await axios.get("url");
  return res.data;
}
