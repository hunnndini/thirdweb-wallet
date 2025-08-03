'use client';

import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    // Auto-open modal after iframe loads
    const timer = setTimeout(() => {
      setHideButton(true);
    }, 1500); // wait 1.5 seconds before hiding

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ opacity: hideButton ? 0 : 1 }}>
        <ConnectWallet
          modalSize="compact"
          theme="dark"
          showThirdwebBranding={false}
        />
      </div>
    </main>
  );
}
