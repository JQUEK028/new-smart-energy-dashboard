import { BoltIcon } from "@heroicons/react/24/outline";
import { FaGasPump } from "react-icons/fa";

export default function EnergySummary() {
  return (
    <div className="bg-white border border-gray-400 rounded-lg p-4 text-black">
      <h2 className="text-lg font-semibold mb-4">Summary And Suggestions</h2>

      {/* Electricity */}
      <div className="flex items-start space-x-4 mb-6">
        <BoltIcon className="w-6 h-6 text-black" />
        <div className="flex-1 border border-black rounded p-3">
          <div className="bg-red-600 text-white text-center font-bold py-1 mb-2">Bad</div>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Estimated cost this month: $112.5</li>
            <li>Projected monthly usage: 450 kWh</li>
            <li>Suggestion: Reduce usage during peak hours</li>
          </ul>
        </div>
      </div>

      {/* Fuel */}
      <div className="flex items-start space-x-4">
        <FaGasPump className="w-6 h-6 text-black" />
        <div className="flex-1 border border-black rounded p-3">
          <div className="bg-yellow-400 text-black text-center font-bold py-1 mb-2">Danger</div>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Estimated cost this month: $126</li>
            <li>Projected monthly usage: 60 Litres</li>
            <li>Suggestion: Try carpooling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
