'use client';

import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Auto-click the ConnectWallet button on load
    const timer = setTimeout(() => {
      const btn = document.querySelector<HTMLButtonElement>(
        'button[class*="tw-connect-wallet"]'
      );
      if (btn) btn.click();
    }, 500); // delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
      <ConnectWallet
        modalSize="compact"
        theme="dark"
        showThirdwebBranding={false}
      />
    </main>
  );
}
