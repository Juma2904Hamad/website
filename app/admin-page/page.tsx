"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("http://127.0.0.1:8000/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => router.push("/login"));
  }, []);

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
