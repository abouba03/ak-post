"use client"

import {Book, Home, Info, Plus } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";


const guestRoutes = [
    {
        icon: Home,
        label: "Home",
        href:"/"
    },
    {
        icon: Info,
        label: "About",
        href:"/search"
    }
];

const CreatorRoutes = [
    {
        icon: Plus,
        label: "New Post",
        href:"/creator/new"
    },
    {
        icon: Book,
        label: "My Posts",
        href:"/creator/analytics"
    }
]

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isCreatorPage = pathname?.includes("/creator")

    const routes = isCreatorPage ? CreatorRoutes : guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                    key={route.href} 
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}