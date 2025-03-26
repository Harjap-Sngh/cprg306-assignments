"use client";

import React from "react";
import NewItem from "./newItem";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function logout() {
    try {
      await firebaseSignOut();
      router.push("/week-10");
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  }

  return (
    <>
      {user ? (
        <main className="flex flex-col items-center space-y-4 my-4">
          <h1 className="text-5xl">Shopping List</h1>
          <NewItem userId={user.uid} />
          <button
            onClick={logout}
            className="absolute right-0 mr-9 border-white border-2 rounded px-5 py-1 text-white hover:text-black hover:bg-gray-200"
          >
            Logout
          </button>
        </main>
      ) : (
        <main className="flex flex-col items-center space-y-4 my-4">
          <h1 className="text-5xl">Login is required for access</h1>
        </main>
      )}
    </>
  );
};

export default Page;
