'use client';

import Sidebar from "../components/Sidebar";
import WeatherWidget from "../components/WeatherWidget";
import EnergySummary from "../components/EnergySummary";
import ConsumptionChart from "../components/ConsumptionChart";
import ComparisonDisplay from "../components/ComparisonDisplay";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#E7F4F3]">
      <Sidebar />
      <main className="flex-1 p-10 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome [user], Here’s your consumption summary
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
          <div className="col-span-1"><EnergySummary /></div>
          <div className="col-span-1"><ComparisonDisplay /></div>
          <div className="col-span-1"><WeatherWidget /></div>
          <div className="col-span-3"><ConsumptionChart /></div>
        </div>
      </main>
    </div>
  );
}
