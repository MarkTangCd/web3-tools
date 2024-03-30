"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TransactionPage() {
  return (
    <div className="p-9">
      <Tabs defaultValue="transaction" className="w-full">
        <TabsList>
          <TabsTrigger value="transaction">Transaction</TabsTrigger>
          <TabsTrigger value="psbt">PSBT</TabsTrigger>
        </TabsList>
        <TabsContent value="transaction">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="psbt">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
