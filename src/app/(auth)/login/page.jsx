
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiLock, FiMail } from "react-icons/fi";
import navLogo from "@/assets/NavLogo.png";

const LoginPage = () => {
    return (
        <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto flex min-h-[calc(100vh-220px)] max-w-5xl items-center justify-center">
                <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur xl:grid-cols-[1.05fr_0.95fr]">
                    <div className="hidden bg-[linear-gradient(160deg,_rgba(16,185,129,0.96),_rgba(5,150,105,0.92))] p-10 text-white xl:flex xl:flex-col xl:justify-between">
                        <div className="space-y-4">
                            <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-50">
                                SkillSphere
                            </span>
                            <div className="space-y-3">
                                <h1 className="max-w-sm text-4xl font-black leading-tight">
                                    Learn smarter, login faster.
                                </h1>
                                <p className="max-w-md text-sm leading-7 text-emerald-50/90">
                                    Continue your courses, track your progress, and keep building new skills every day.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center py-8">
                            <Image
                                src={navLogo}
                                alt="SkillSphere logo"
                                className="h-40 w-40 object-contain"
                                priority
                            />
                        </div>
                        <div className="grid gap-4 text-sm text-emerald-50/95 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                                <p className="text-2xl font-bold">120+</p>
                                <p>Hands-on courses ready to continue</p>
                            </div>
                            <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                                <p className="text-2xl font-bold">24/7</p>
                                <p>Access from any device, anytime</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-10">
                        <div className="mx-auto w-full max-w-md">
                            <div className="mb-8 space-y-2 text-center xl:text-left">
                                <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
                                    Welcome back
                                </span>
                                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Login</h2>
                                <p className="text-sm leading-6 text-slate-500">
                                    Sign in to continue your learning journey on SkillSphere.
                                </p>
                            </div>

                            <form className="space-y-5">
                                <label className="block space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Email</span>
                                    <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm shadow-slate-100 transition focus-within:border-emerald-400 focus-within:bg-white">
                                        <FiMail className="text-slate-400" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                                        />
                                    </span>
                                </label>

                                <label className="block space-y-2">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm font-semibold text-slate-700">Password</span>
                                        <button type="button" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                                            Forgot password?
                                        </button>
                                    </div>
                                    <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm shadow-slate-100 transition focus-within:border-emerald-400 focus-within:bg-white">
                                        <FiLock className="text-slate-400" />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                                        />
                                    </span>
                                </label>

                                <label className="flex items-center gap-3 text-sm text-slate-600">
                                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-emerald-500" />
                                    <span>Keep me signed in</span>
                                </label>

                                <button
                                    type="submit"
                                    className="btn h-12 w-full rounded-2xl border-0 bg-gradient-to-r from-emerald-500 via-emerald-500 to-orange-400 text-base font-bold text-white shadow-lg shadow-emerald-200 hover:from-emerald-600 hover:to-orange-500"
                                >
                                    Login
                                </button>
                            </form>

                            <div className="my-6 flex items-center gap-4">
                                <div className="h-px flex-1 bg-slate-200" />
                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">or</span>
                                <div className="h-px flex-1 bg-slate-200" />
                            </div>

                            <button
                                type="button"
                                className="btn h-12 w-full rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm hover:border-emerald-200 hover:bg-emerald-50"
                            >
                                <FcGoogle className="text-xl" />
                                Google Login
                            </button>

                            <p className="mt-6 text-center text-sm text-slate-500">
                                New to SkillSphere?{" "}
                                <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-700">
                                    Register now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
