import "./globals.css";;

import { getServerSession } from 'next-auth'
import SessionProvider from '@/app/lib/SessionProvider'

export const metadata = {
  title: "ChemistxNext",
  description: "Website for chemistry learned",
};

export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/chemistry.png" sizes="any" />
      </head>
      <body className="font-kanit font-light text-white p-0 m-0 box-border h-full overflow-x-hidden">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
