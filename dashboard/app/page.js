"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (!saved) return router.push("/login");
    setUser(JSON.parse(saved));
  }, [router]);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-96 p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p className="text-lg">Welcome, {user.username}</p>
        <p className="text-gray-500 mb-6">{user.email}</p>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
