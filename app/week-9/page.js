"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

// Use the useUserAuth hook to get the user object and the login and logout functions
const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Sign in to Firebase with GitHub authentication
  async function login() {
    setLoading(true);
    try {
      await gitHubSignIn();
      router.push("/week-9/shopping-list");
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  }

  // Sign out of Firebase

  return (
    <div>
      {!user && (
        <>
          <h1 className="text-center mt-10 text-5xl">
            Hi there, Login is required for access
          </h1>
          <button
            onClick={login}
            disabled={loading}
            className="border-2 border-white rounded px-5 py-1 text-white hover:text-black hover:bg-white m-auto block mt-5"
          >
            {loading ? "Logging in..." : "Login with GitHub"}
          </button>
        </>
      )}
      <div>
        {user && (
          <div>
            <h1>Welcome {user.displayName}</h1>
            <Link href="/week-9/shopping-list"> Go to Shopping List</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
