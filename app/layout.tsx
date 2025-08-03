'use client';

import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider
          clientId="YOUR_CLIENT_ID" // 🔑 from thirdweb.com/dashboard
          activeChain="ethereum"   // or "sepolia", "polygon", etc.
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
