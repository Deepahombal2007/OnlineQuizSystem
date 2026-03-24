import "./globals.css";

export const metadata = {
  title: "Online Quiz System",
  description: "A premium quiz application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
