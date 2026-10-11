import "./globals.scss";

export const metadata = {
  title: {
    default: "AVNIQ Technology | Smart Digital Products",
    template: "%s | AVNIQ Technology",
  },
  description:
    "AVNIQ Technology designs and builds thoughtful web applications, digital experiences, and custom software.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
