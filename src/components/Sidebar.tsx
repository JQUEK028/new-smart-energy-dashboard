import Link from "next/link";
import { HomeIcon, ChartBarIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-green-800 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">Smart Energy</h2>
      <nav className="space-y-4">
        <Link href="/" className="flex items-center space-x-2 hover:bg-green-600 p-2 rounded">
          <HomeIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link href="/energy-input" className="flex items-center space-x-2 hover:bg-green-600 p-2 rounded">
          <ChartBarIcon className="w-5 h-5" />
          <span>Energy Input</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-2 hover:bg-green-600 p-2 rounded">
          <Cog6ToothIcon className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
