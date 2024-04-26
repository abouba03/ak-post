import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="bg-slate-500 h-7 ">
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
  )
}
