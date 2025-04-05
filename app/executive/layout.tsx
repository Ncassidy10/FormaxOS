// app/executive/layout.tsx
import React from 'react';

export default function ExecutiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen p-6 bg-slate-100">
          <h1 className="text-2xl font-bold text-orange-600">Executive Dashboard</h1>
          <main className="mt-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
