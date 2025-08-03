'use client';

import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
      <ConnectWallet />
    </main>
  );
}
