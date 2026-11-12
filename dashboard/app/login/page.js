"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data));
        router.push("/");
      } else {
        setMsg(data.error);
      }
    } catch {
      setMsg("Cannot reach backend");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={submit}
        className="bg-white w-96 p-8 rounded-xl shadow-md flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <input
          className="border border-gray-300 rounded-lg p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700"
        >
          Login
        </button>
        <p className="text-red-500 text-center">{msg}</p>
        <Link href="/register" className="text-blue-600 text-center">
          Go to Registration
        </Link>
      </form>
    </div>
  );
}
