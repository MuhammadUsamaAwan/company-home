import { Archivo, Heebo } from 'next/font/google';

export const fontSans = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-2',
});

export const fontHeading = Heebo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heebo-2',
});
