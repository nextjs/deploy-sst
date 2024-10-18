import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js with SST',
  description: 'Deploy your Next.js application with SST.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
