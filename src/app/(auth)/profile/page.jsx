import Link from 'next/link';
import { FiEdit3, FiMail } from 'react-icons/fi';

const ProfilePage = () => {
  return (
    <section className="relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 lg:px-0 lg:py-12">
      <div className="pointer-events-none absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-100/45 blur-3xl"></div>
      <div className="pointer-events-none absolute left-0 top-20 h-40 w-40 rounded-full bg-amber-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-24 h-44 w-44 rounded-full bg-sky-100/40 blur-3xl"></div>

      <div className="mx-auto max-w-md">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-emerald-100/80 bg-white/95 p-5 text-center shadow-[0_28px_80px_-40px_rgba(16,185,129,0.45)] backdrop-blur-sm sm:p-8">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-50 blur-2xl"></div>

          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            My Profile
          </span>

          <div className="mt-8 flex justify-center">
            <img
              src="https://ui-avatars.com/api/?name=Nafiz+Rahman&background=fff7ed&color=ea580c&bold=true&size=256"
              alt="Nafiz Rahman"
              className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-xl shadow-emerald-100"
            />
          </div>

          <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Name Avatar
          </h1>

          <div className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
            <FiMail className="text-emerald-600" />
            <span className="truncate">email@skillsphere.com</span>
          </div>

          <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Keep your learner identity polished and updated so your SkillSphere
            journey always feels personal and organized.
          </p>

          <Link
            href="/update"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border-0 bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 px-5 py-4 text-base font-bold text-white shadow-[0_16px_30px_-18px_rgba(249,115,22,0.85)] transition duration-300 hover:scale-[1.01] hover:from-amber-500 hover:via-orange-500 hover:to-orange-600"
          >
            Update Information
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
