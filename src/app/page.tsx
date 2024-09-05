"use client";

import { EC_Card } from "@/components/ui/ec_card";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <h1>Hii</h1>
      <EC_Card title="Harry potter" contributorCount={0}/>
    </main>
  );
}
