
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiClock, FiMail, FiPhoneCall } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import footerLogo from "@/assets/FooterLogo.png";

const Footer = () => {
    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/allcourses" },
        { label: "About", href: "/about" },
        { label: "My Profile", href: "/profile" },
    ];

    const socialLinks = [
        { label: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
        { label: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> },
        { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedinIn /> },
        { label: "YouTube", href: "https://youtube.com", icon: <FaYoutube /> },
    ];

    return (
        <footer className="relative mt-16 overflow-hidden rounded-t-[2.5rem] bg-[#09162f] text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(96,165,250,0.16),_transparent_25%),linear-gradient(180deg,_rgba(9,22,47,0.96)_0%,_rgba(7,18,39,1)_100%)]"></div>
            <div className="pointer-events-none absolute left-10 top-14 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"></div>
            <div className="pointer-events-none absolute right-10 top-20 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_.95fr_.8fr_.9fr]">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-4">
                            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-sm">
                                <Image
                                    src={footerLogo}
                                    alt="SkillSphere footer logo"
                                    className="h-12 w-12 rounded-xl object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black tracking-tight text-white">
                                    SkillSphere
                                </h2>
                                <p className="text-sm font-medium text-emerald-200">
                                    Learn with confidence
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-xs text-base leading-8 text-slate-300">
                            Empowering you with the skills to learn, grow, and achieve your goals through practical, career-focused education.
                        </p>

                        <div className="mt-10">
                            <Image
                                src={footerLogo}
                                alt="Online Learning Platform logo"
                                className="h-auto w-full max-w-[280px] object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">Contact Info</h3>
                        <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-lg text-emerald-200 ring-1 ring-white/10">
                                    <FiPhoneCall />
                                </div>
                                <p className="text-sm leading-7 text-slate-300">
                                    +880 1234-567890
                                    <br />
                                    +880 9876-543210
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-lg text-emerald-200 ring-1 ring-white/10">
                                    <FiMail />
                                </div>
                                <p className="text-sm leading-7 text-slate-300">
                                    info@skillsphere.com
                                    <br />
                                    support@skillsphere.com
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-lg text-emerald-200 ring-1 ring-white/10">
                                    <FiClock />
                                </div>
                                <p className="text-sm leading-7 text-slate-300">
                                    Mon - Fri: 9AM - 6PM
                                    <br />
                                    Saturday: 10AM - 4PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">Quick Links</h3>
                        <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>

                        <ul className="mt-8 space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex items-center gap-3 text-base text-slate-300 transition hover:text-white"
                                    >
                                        <span className="text-emerald-300">›</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">Follow Us</h3>
                        <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={link.label}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/8 text-lg text-white transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-400/15"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        <div className="mt-10">
                            <h4 className="text-2xl font-bold text-white">Subscribe to our newsletter</h4>
                            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                                Get the latest updates, new courses and offers directly in your inbox.
                            </p>

                            <form className="mt-6 flex overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent px-5 py-4 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="flex h-auto min-w-16 items-center justify-center bg-gradient-to-br from-[#6f6bff] to-[#a855f7] px-5 text-xl text-white transition hover:from-[#5f5af6] hover:to-[#9333ea]"
                                >
                                    <IoSend />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 SkillSphere. All rights reserved.</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="/" className="transition hover:text-white">Terms & Conditions</Link>
                            <Link href="/" className="transition hover:text-white">Privacy Policy</Link>
                            <Link href="/" className="transition hover:text-white">Refund Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
