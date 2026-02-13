"use client";

import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {

    e.preventDefault();
    setError("");

    try {

      const res = await fetch("http://127.0.0.1:8000/api/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, password }),

      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("token", data.token);

      router.push("/admin-dashboard");


      } 
      
      catch (err: any) {

        setError("Network or server error");

      }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001F3F] via-[#002B5B] to-[#001F3F] px-4 mb-25 -mt-10">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

           </div>

          <div className="flex justify-between items-center text-sm text-gray-300">

            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-cyan-400"/>
              Remember me
            </label>
            <button type="button" className="text-cyan-400 hover:underline">
              Forgot password?
            </button>

          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-bold py-3 
             rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
}
