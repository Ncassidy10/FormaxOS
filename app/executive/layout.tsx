// app/executive/layout.tsx
import React from 'react';

export default function ExecutiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-orange-600">Executive Dashboard</h1>
          <div className="mt-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
