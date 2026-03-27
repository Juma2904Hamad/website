"use client";

import { LogOut } from "lucide-react";

export default function Dashboard() {
  const handleLogout = () => {
    alert("Logged out!"); // placeholder, unaweza kuongeza redirect kama unataka
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </header>

      {/* Stats Cards */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-green-500">128</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">New Orders</h2>
          <p className="text-3xl font-bold text-blue-500">24</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-yellow-500">$12.4K</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400">
        &copy; {new Date().getFullYear()} My Admin Panel. All rights reserved.
      </footer>
    </div>
  );
}