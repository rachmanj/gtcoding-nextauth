"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <div>ID: {session?.user?._id} </div>
        <button
          onClick={() => signOut()}
          className="bg-red-600 text-white font-bold cursor-pointer px-6 py-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
