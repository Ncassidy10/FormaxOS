// app/executive/layout.tsx
import React from 'react'

export default function ExecutiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Executive Dashboard</h1>
      <div>{children}</div>
    </section>
  )
}