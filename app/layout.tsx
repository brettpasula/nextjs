import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import type { Metadata } from "next";
import { ReactNode } from "react";
import TopToolbar from "./components/toolbar";

export const metadata: Metadata = {
  title: "Brett Pasula",
  description: "Personal website of Brett Pasula",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: "100vh", margin: 0 }}>
         <TopToolbar />
          <Box display="flex"  
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            {children}
          </Box>
      </body>
    </html>
  );
}
