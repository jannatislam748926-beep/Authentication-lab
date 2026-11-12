import "./globals.css";

export const metadata = { title: "Auth" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
