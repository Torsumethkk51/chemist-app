import "./globals.css";;

export const metadata = {
  title: "ChemistxNext",
  description: "Website for chemistry learned",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-kanit">{children}</body>
    </html>
  );
}
