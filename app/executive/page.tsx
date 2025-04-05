import React from "react";

export default function ExecutiveDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Executive Dashboard</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Quarterly Goals</h2>
          <p className="text-sm text-gray-500">Set and monitor company-wide objectives.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Company KPIs</h2>
          <p className="text-sm text-gray-500">Real-time performance snapshot.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Weekly Meeting Notes</h2>
          <p className="text-sm text-gray-500">Add key points and decisions here.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Lessons & Adjustments</h2>
          <p className="text-sm text-gray-500">Track strategic shifts and insights.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Executive Task Tracker</h2>
          <p className="text-sm text-gray-500">Manage top-level priorities.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Vision & Strategy</h2>
          <p className="text-sm text-gray-500">Outline of current focus and future goals.</p>
        </section>
      </div>
    </div>
  );
}
