import type { Metadata } from 'next';

import { cn } from '~/lib/cn';
import { fontHeading, fontSans } from '~/lib/fonts';
import { SiteHeader } from '~/components/layouts/site-header';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Company Home',
  description: 'A company landing page',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(fontSans.variable, fontHeading.variable, 'antialiased')}>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
