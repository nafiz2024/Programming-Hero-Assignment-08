'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogIn, FiMenu, FiUserPlus } from "react-icons/fi";
import navLogo from "../../assets/NavLogo.png";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/allcourses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/profile", label: "My Profile" },
];

const Navbar = () => {
    const pathname = usePathname();

    const isActivePath = (href) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const getNavLinkClass = (href) => {
        const baseClass = "rounded-full px-4 font-medium transition";

        if (isActivePath(href)) {
            return `${baseClass} bg-emerald-500 text-white shadow-md shadow-emerald-200`;
        }

        return `${baseClass} text-slate-700 hover:bg-emerald-50 hover:text-emerald-700`;
    };

    const navLinks = navItems.map(({ href, label }) => (
        <li key={href}>
            <Link className={getNavLinkClass(href)} href={href}>
                {label}
            </Link>
        </li>
    ));

    return (
        <header className="sticky top-0 z-50 px-3 py-3 sm:px-4 sm:py-4">
            <div className="navbar rounded-2xl border border-emerald-100 bg-white/90 px-3 shadow-lg shadow-emerald-100/60 backdrop-blur-md sm:px-4">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-full text-xl text-slate-700 lg:hidden">
                            <FiMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl border border-emerald-100 bg-white p-3 shadow-xl">
                            {navLinks}
                            <li className="mt-3 gap-2 border-t border-emerald-100 pt-3">
                                <Link href="/login" className="btn btn-sm rounded-full bg-slate-100 text-slate-700">
                                    Login
                                </Link>
                                <Link href="/register" className="btn btn-sm rounded-full border-0 bg-emerald-500 text-white">
                                    Join Free
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <div className="shrink-0 rounded-2xl bg-emerald-50 p-1 ring-1 ring-emerald-100 sm:p-2">
                            <Image
                                src={navLogo}
                                alt="SkillSphere logo"
                                className="h-10 w-10 rounded-xl object-cover sm:h-10 sm:w-10 sm:object-contain"
                            />
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-sm font-bold leading-5 text-slate-900 sm:text-lg">SkillSphere</h2>
                            <p className="hidden text-xs font-medium text-emerald-600 sm:block">Online Learning Platform</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 rounded-full bg-slate-50 px-2 py-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link href="/login" className="btn btn-ghost hidden rounded-full px-4 text-slate-700 xl:inline-flex">
                        <FiLogIn />
                        Login
                    </Link>
                    <Link href="/register" className="btn hidden rounded-full border-0 bg-emerald-500 px-4 text-white shadow-md shadow-emerald-200 hover:bg-emerald-600 xl:inline-flex">
                        <FiUserPlus />
                        Join Free
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
