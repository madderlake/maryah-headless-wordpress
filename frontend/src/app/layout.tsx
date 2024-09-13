// app/layout.tsx
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Maryah Headless Theme',
  description: 'A theme powered by WordPress and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
