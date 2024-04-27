"use client";

import { UserButton, useAuth } from "@clerk/nextjs";

export const NavbarRoutes = () => {
  return (
    <>
      <div className="flex gap-x-3 ml-auto justify-end  pt-">
        <UserButton
          afterSignOutUrl="/"
        />
      </div>
    </>
  )
}