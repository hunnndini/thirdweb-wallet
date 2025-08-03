'use client';

import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Automatically trigger modal on load
    const button = document.querySelector("button[class*='tw-connect-button']");
    if (button) (button as HTMLButtonElement).click();
  }, []);

  return (
    <main
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}>
        <ConnectWallet
          modalSize="compact"
          theme="dark"
          showThirdwebBranding={false}
        />
      </div>
    </main>
  );
}
