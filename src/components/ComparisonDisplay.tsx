import { BoltIcon } from "@heroicons/react/24/outline";

export default function ComparisonDisplay() {
  const nationalComparison = {
    region: 'Singapore',
    diffPercent: -15,
    message: 'Your energy-saving efforts helped reduce carbon emissions by X kg, equivalent to planting Y trees.'
  };

  const regionalComparison = {
    region: 'Jurong',
    diffPercent: 25,
    energyUsed: '2.5 kWh'
  };

  return (
    <div className="text-black space-y-4">
      <div className="bg-[#A34B27] border border-gray-400 rounded-lg p-4">
        <h2 className="font-bold">National Comparison</h2>
        <p className="text-sm">Electricity</p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-xs">Average</p>
            <p className="text-lg font-bold">{nationalComparison.region}</p>
            <p className="text-red-500 font-semibold">{nationalComparison.diffPercent}%</p>
          </div>
          <BoltIcon className="w-6 h-6 text-yellow-400" />
        </div>
        <p className="text-xs italic mt-2">{nationalComparison.message}</p>
      </div>

      <div className="bg-[#913122] border border-gray-400 rounded-lg p-4">
        <h2 className="font-bold">Regional Comparison</h2>
        <p className="text-sm">{regionalComparison.energyUsed}</p>
        <p className="text-lg font-bold">{regionalComparison.region}</p>
        <p className="text-green-500 font-semibold">+{regionalComparison.diffPercent}%</p>
      </div>
    </div>
  );
}
