import "./globals.css";;

export const metadata = {
  title: "ChemistxNext",
  description: "Website for chemistry learned",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-kanit font-light text-white p-0 m-0 box-border h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
