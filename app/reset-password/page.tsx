"use client";

import {Mail} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

 
  const [email, setEmail] = useState("");


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid) return;

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      router.push("/admin-dashboard");
    } catch (err) {
      console.error(err);
      setError("Network or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div
        className="relative flex w-full max-w-2xl h-[420px] rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/bg-img.png')" }}
      >
        <div className="hidden md:flex md:w-1/2 items-center justify-center text-white">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-white text-center mb-5 -mt-7">
            Reset Password
          </h2>

          <form onSubmit={handleResetPassword} className="space-y-4">
           
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="email"
                placeholder="Admin Email"
                className="w-full pl-10 pr-4 py-2 rounded-md text-sm bg-white shadow-lg focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

           
            <button
              type="submit"
              disabled={!isEmailValid || loading}
              className={`w-full flex items-center justify-center gap-2 py-2 rounded-full transition mt-4 text-sm ${
                loading
                  ? "bg-green-500 text-white shadow-lg"
                  : isEmailValid
                  ? "bg-green-500 text-white hover:bg-green-600 shadow-lg cursor-pointer"
                  : "bg-green-300 text-white cursor-not-allowed shadow-lg"
              }`}
            >
              {loading && (
                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin text-sm"></span>
              )}
              {loading ? "Please wait..." : "Send Reset Link"}
            </button>

             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}