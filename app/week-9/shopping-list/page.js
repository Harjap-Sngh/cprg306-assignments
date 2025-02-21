"use client";

import React from "react";
import NewItem from "./newItem";
import { useUserAuth } from "../_utils/auth-context";

const Page = () => {
  const { user } = useUserAuth();

  return (
    <>
      {user ? (
        <main className="flex flex-col items-center space-y-4 my-4">
          <h1 className="text-5xl">Shopping List</h1>
          <NewItem />
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
