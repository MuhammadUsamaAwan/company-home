import { Archivo, Heebo, Syne } from 'next/font/google';

export const fontSans = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

export const fontHeading = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

export const fontText = Heebo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heebo',
});
