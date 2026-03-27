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
      const res = await fetch("https://sufifa-v1.infinityfreeapp.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
        return;
      }
      localStorage.setItem("token", data.token);
      router.push("/admin-dashboard");
    } catch {
      setError("Network or server errors");
    }
  };

  return (
   
       <div className="flex items-center justify-center min-h-screen  px-6">
  <div className="relative flex w-full max-w-3xl h-[400px] rounded-2xl overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/img/bg-img.png')" }}
  >
    
    {/* Dark overlay for better contrast */}
    <div className="absolute inset-0"></div>

    {/* Left decorative side */}
    <div className="hidden md:flex md:w-1/2 relative z-10 items-center justify-center text-white p-10">
      <div>
        <h1 className="text-3xl font-bold mb-3">Welcome Back</h1>
        <p className="text-sm text-gray-200">
          Secure admin access to your system dashboard
        </p>
      </div>
    </div>

    {/* Right Form Card */}
    <div className="w-full md:w-1/2 relative z-10  backdrop-blur-sm p-10 flex flex-col justify-center">
      
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Admin Login
        </h2>
        <div className="w-12 h-1  mx-auto mt-3 rounded-full"></div>
      </div>

      {/* FORM */}
<form onSubmit={handleLogin} className="space-y-5">

  {/* Email */}
  <div className="relative">
    <Mail
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      size={18}
    />
    <input
      type="email"
      placeholder="Admin Email"
      className="w-full pl-10 pr-4 py-2 border border-none rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-gray-600 
      focus:border-gray-600 transition text-gray-800 bg-white shadow-lg"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  {/* Password */}
  <div className="relative">
    <Lock
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      size={18}
    />
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className="w-full pl-10 pr-10 py-2 border border-none rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-gray-600 
      focus:border-gray-600 transition text-gray-800 bg-white shadow-lg"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <div
      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </div>
  </div>

  {/* Remember Me */}
  <div className="flex items-center justify-between text-sm">
    <label className="flex items-center gap-2 text-white">
      <input
        type="checkbox"
        className="accent-gray-700"
      />
      Remember me
    </label>

    <span className="text-white hover:text-gray-700 cursor-pointer transition">
      Forgot password?
    </span>
  </div>

  {/* Error */}
  {error && (
    <p className="text-red-500 text-sm text-center">
      {error}
    </p>
  )}

  {/* Submit */}
  <button
    type="submit"
    className="w-full py-2 bg-gray-800 hover:bg-gray-900 
    text-white rounded-full font-semibold transition duration-200 shadow-lg"
  >
    Sign In
  </button>

</form>

    </div>

  </div>
</div>

  );
}