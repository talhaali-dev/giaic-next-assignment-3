"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="text-4xl">About Page</div>
      <Link href={"/navbar"}>Navbar</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/footer"}>footer</Link>
      <Link href={"/about"}>about</Link>

      <button
        onClick={() => router.push("/about")}
        className="text-xl bg-emerald-400 rounded-sm border-none"
      >
        go to about Page
      </button>

      <button
        onClick={() => router.push("/footer")}
        className="text-xl bg-emerald-400 rounded-sm border-none"
      >
        go to footer Page
      </button>

      <button
        onClick={() => router.push("/contact")}
        className="text-xl bg-emerald-400 rounded-sm border-none"
      >
        go to contact Page
      </button>

      <button
        onClick={() => router.push("/navbar")}
        className="text-xl bg-emerald-400 rounded-sm border-none"
      >
        go to navbar Page
      </button>
    </div>
  );
}
