'use client';

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider
          clientId="492413ebee1171638040400c0602c222" // 🔑 Replace with your actual clientId from https://thirdweb.com/dashboard
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
