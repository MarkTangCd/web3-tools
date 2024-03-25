"use client";
import { useUTXOs } from "@/hooks/useUTXOs";
import { BitcoinNetworkType } from "@/types/btc";

export default function TransactionPage() {
  const { utxos, isError, isLoading } = useUTXOs(
    BitcoinNetworkType.Testnet,
    "tb1pnq36mn7l8d3kvgejvnc5q63ls9umhaqscl623eqzge8mstj332xscmeu8h"
  );

  if (isError) {
    return (
      <div className="container flex items-center">Fetching data error</div>
    );
  }

  if (isLoading) {
    return <div className="container flex items-center">Loading...</div>;
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          BTC Transaction
        </h1>
        <ul>
          {utxos?.map((utxo) => (
            <li key={utxo.txid}>{utxo.value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
