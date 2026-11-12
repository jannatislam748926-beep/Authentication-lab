"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL;
const KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`${API}/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: KEY },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/login");
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
        <h1 className="text-3xl font-bold text-center">Registration</h1>
        <input
          className="border border-gray-300 rounded-lg p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          Register
        </button>
        <p className="text-red-500 text-center">{msg}</p>
        <Link href="/login" className="text-blue-600 text-center">
          Go to Login
        </Link>
      </form>
    </div>
  );
}
