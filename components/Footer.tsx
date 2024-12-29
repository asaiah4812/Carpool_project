"use client"
import { CarFront, FolderKanban, Info, Search, SquarePlus, User } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface LinkProps {
    name: string;
    href: string;
    icon: React.ReactNode;
}

const links:LinkProps[] = [
    {
        name: "Search",
        href: "/search",
        icon: <Search />
    },
    {
        name: "Create",
        href: "/create",
        icon: <SquarePlus />
    },
    {
        name: "Home",
        href: "/",
        icon: <CarFront />
    },
    {
        name: "Contact",
        href: "/contact",
        icon: <FolderKanban />
    },
    {
        name: "Profile",
        href: "/profile",
        icon: <User />
    }
]

const Footer = () => {
    const pathname = usePathname();
  return (
    <footer className='fixed inset-x-0 bottom-4 bg-btn w-[90%] p-2 mx-auto md:w-[350px] rounded-md'>
        <div className='flex justify-between items-center'>
            {links.map((link) => (
                <Link
                className={`${pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/') ? 'text-white bg-gradient-to-tr from-blue-950 rind ring-blue-200 to-blue-900' : 'text-slate-400'} hover:text-slate-300 p-4 rounded-md`} 
                href={link.href} 
                key={link.name}>
                    {link.icon}
                </Link>
            ))}
        </div>
    </footer>
  )
}

export default Footer