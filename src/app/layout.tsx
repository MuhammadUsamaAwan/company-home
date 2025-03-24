import type { Metadata } from 'next';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Company Home',
  description: 'A company landing page',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
