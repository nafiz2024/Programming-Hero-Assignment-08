
import { FiArrowUpRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Instructor = ({ allInstructorData }) => {
    const allInstructors = allInstructorData;

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-0">
            <div className="absolute left-0 top-16 h-44 w-44 rounded-full bg-amber-100/40 blur-3xl"></div>
            <div className="absolute right-10 top-8 h-36 w-36 rounded-full bg-emerald-100/40 blur-3xl"></div>

            <div className="relative mb-10 text-center">
                <span className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100 backdrop-blur-sm">
                    Mentor Spotlight
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Top Instructors Section
                </h2>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    Learn from standout mentors who bring real experience, strong guidance, and practical insight into every course.
                </p>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allInstructors.map((instructor, index) => (
                    <div
                        key={instructor.id}
                        className="group relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_-32px_rgba(16,185,129,0.55)]"
                    >
                        <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-50 transition-transform duration-300 group-hover:scale-110"></div>

                        <div className="relative flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="overflow-hidden rounded-2xl ring-2 ring-white shadow-md shadow-emerald-100">
                                    <img
                                        src={instructor.image}
                                        alt={instructor.name}
                                        className="h-16 w-16 object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="inline-flex rounded-full border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-orange-500 shadow-sm shadow-orange-100">
                                        Expertise
                                    </span>
                                    <p className="mt-2 text-sm font-semibold text-slate-500">
                                        {instructor.expertise}
                                    </p>
                                </div>
                            </div>

                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700">
                                <FiArrowUpRight />
                            </span>
                        </div>

                        <div className="relative mt-6">
                            <h3 className="text-2xl font-black text-slate-900">
                                {instructor.name}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {instructor.description}
                            </p>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-amber-400">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <FaStar key={starIndex} className="text-lg drop-shadow-[0_2px_6px_rgba(251,191,36,0.35)]" />
                                ))}
                            </div>
                            <span className="rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1 text-sm font-bold text-emerald-700 shadow-sm shadow-emerald-100">
                                Top 0{index + 1}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Instructor;
