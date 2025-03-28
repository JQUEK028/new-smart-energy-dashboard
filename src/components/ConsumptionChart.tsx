'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Jan', Home: 120, Neighbours: 100 },
  { name: 'Feb', Home: 140, Neighbours: 110 },
  { name: 'Mar', Home: 135, Neighbours: 120 },
  { name: 'Apr', Home: 150, Neighbours: 125 },
  { name: 'May', Home: 165, Neighbours: 135 },
  { name: 'Jun', Home: 170, Neighbours: 140 },
  { name: 'Jul', Home: 180, Neighbours: 150 },
];

export default function ConsumptionChart() {
  return (
    <div className="bg-[#0D1117] border border-gray-400 text-black rounded-lg p-4">
      <h2 className="text-white text-lg font-semibold mb-1">Energy Consumption</h2>
      <p className="text-gray-400 text-sm mb-2">Monthly</p>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="Home" stroke="#FFD700" strokeWidth={2} />
          <Line type="monotone" dataKey="Neighbours" stroke="#00CED1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
