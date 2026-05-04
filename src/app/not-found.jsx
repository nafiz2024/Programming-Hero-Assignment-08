import Link from 'next/link';
import { FiCompass, FiHome, FiSearch, FiArrowRight } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-0">
      <div className="pointer-events-none absolute left-1/2 top-6 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-100/50 blur-3xl"></div>
      <div className="pointer-events-none absolute left-0 top-24 h-40 w-40 rounded-full bg-amber-100/50 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-20 h-48 w-48 rounded-full bg-sky-100/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.45)] backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.08fr_.92fr] lg:p-12">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              Route Not Found
            </span>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-7xl font-black leading-none text-slate-900 sm:text-8xl lg:text-[7rem]">
                4
              </span>
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400 text-3xl text-white shadow-xl shadow-emerald-200 sm:h-24 sm:w-24">
                <FiCompass />
              </div>
              <span className="text-7xl font-black leading-none text-slate-900 sm:text-8xl lg:text-[7rem]">
                4
              </span>
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              This page slipped outside the learning map
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              The destination you requested is unavailable right now. Let&apos;s
              guide you back to the most useful parts of SkillSphere without
              losing momentum.
            </p>

            <div className="relative z-20 mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="btn h-auto rounded-2xl border-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 hover:from-emerald-600 hover:via-teal-600 hover:to-sky-600"
              >
                <FiHome />
                Back To Home
              </Link>

              <Link
                href="/allcourses"
                className="btn h-auto rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                <FiSearch />
                Browse Courses
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-2xl shadow-slate-200">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/20 blur-2xl"></div>
              <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl"></div>

              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
                  Error 404
                </span>
                <span className="text-sm font-medium text-slate-300">
                  Navigation recovery
                </span>
              </div>

              <div className="relative mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-emerald-200">
                    Quick recovery
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Jump back to the homepage or explore the course library to
                    continue your learning flow.
                  </p>
                </div>

                <div className="grid gap-3">
                  <Link
                    href="/about"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          About SkillSphere
                        </p>
                        <p className="mt-1 text-xs leading-6 text-slate-300">
                          Learn what this platform offers.
                        </p>
                      </div>
                      <FiArrowRight className="text-emerald-300" />
                    </div>
                  </Link>

                  <Link
                    href="/register"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Create Account
                        </p>
                        <p className="mt-1 text-xs leading-6 text-slate-300">
                          Start a fresh path with a new profile.
                        </p>
                      </div>
                      <FiArrowRight className="text-emerald-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
