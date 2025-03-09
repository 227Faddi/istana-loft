import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Barlow } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '600'],
});

export const metadata: Metadata = {
  title: "Istana Loft - Sardinia's coastal paradise",
  description: 'Rental propriety in Porto Istana',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={barlow.className}>
          <div className="xl:px-32">
            <Navbar />
          </div>
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
