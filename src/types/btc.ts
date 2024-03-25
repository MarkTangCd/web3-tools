export enum BitcoinNetworkType {
  Mainnet = "Mainnet",
  Testnet = "Testnet",
}

export type MempoolUTXO = {
  txid: string;
  vout: number;
  status: {
    confirmed: boolean;
    block_height?: number;
    block_hash?: string;
    block_time?: number;
  };
  value: number;
};
