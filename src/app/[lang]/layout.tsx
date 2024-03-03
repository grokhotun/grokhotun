import { Inter } from 'next/font/google';
import './globals.css';

import { unstable_setRequestLocale } from 'next-intl/server';

export const generateStaticParams = () => {
  return [{ lang: 'ru' }, { lang: 'en' }];
};

const inter = Inter({ subsets: ['latin'] });

const meta = {
  ru: {
    title: 'Аскар Яляев',
    description: 'Аскар Яляев резюме',
  },
  en: {
    title: 'Askar Yalyaev',
    description: 'Askar Yalyaev curriculum vitae',
  },
};

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'ru' };
}) {
  const content = meta[params.lang];
  return {
    title: content.title,
    description: content.description,
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: 'en' | 'ru' };
}>) {
  unstable_setRequestLocale(params.lang);
  return (
    <html lang={params.lang} className='text-[14px]'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
