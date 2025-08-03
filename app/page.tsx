'use client';

import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Hidden connect button to trigger modal */}
      <div style={{ opacity: 0, pointerEvents: "none", height: 0 }}>
        <ConnectWallet
          modalSize="compact"
          theme="dark"
          showThirdwebBranding={false}
        />
      </div>
    </main>
  );
}
