import { MoonStarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "../../../auth";


export default async function Header() {
  const session = await auth();

  return (
    <div className="flex gap-4 justify-around items-center text-zinc-300 tracking-tighter px-8">
      <div className="flex items-center justify-center gap-8 py-8 text-sm ">
        <img className="text-white h-12" src="/logo.svg" />
      </div>
      <div className="flex gap-8 items-center justify-center">
        {session && (
          <Link href="/dashboard">
            <Button className="text-sm font-bold px-4 py-2">Dashboard</Button>
          </Link>
        )}
        {!session && (
          <Link href="/login">
            <Button className="text-sm font-bold px-4 py-2">Login</Button>
          </Link>
        )}

        <div className="bg-zinc-900 py-2 px-4 rounded">
          <MoonStarIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
