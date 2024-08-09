"use client";

import { Button } from "@/app/components/ui/button";
// import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <Button
      className="w-24"
      variant="destructive"
      onClick={() => {
        localStorage.removeItem("apiKey");
      }}
    >
      Signout
    </Button>
  );
}
