import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { FiArrowRight, FiBookOpen, FiLayers, FiTrendingUp, FiUsers } from "react-icons/fi";
import { getAllCourses, getInstructorData } from "@/lib/data";

const AllCourses = async () => {
    const courses = await getAllCourses();
    const instructors = await getInstructorData();

    const totalCourses = courses.length;
    const totalCategories = new Set(courses.map((course) => course.category)).size;
    const popularCourses = courses.filter((course) => course.popularCourse === true).length;
    const newCourses = courses.filter((course) => course.isNewCourse === true).length;

    return (
        <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-0">
            <div className="pointer-events-none absolute left-0 top-12 h-44 w-44 rounded-full bg-emerald-100/40 blur-3xl"></div>
            <div className="pointer-events-none absolute right-0 top-24 h-52 w-52 rounded-full bg-amber-100/40 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.45)] backdrop-blur-sm sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-50 blur-2xl"></div>

                <div className="relative grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
                            <FiBookOpen />
                            Explore Every Path
                        </span>

                        <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Discover courses built for modern skills and real growth
                        </h1>

                        <div className="mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                            Browse our complete learning catalog across development, design, marketing, and data. Each course is crafted to help you move from curiosity to confident execution.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.75rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm shadow-emerald-100">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl text-emerald-700">
                                <FiLayers />
                            </div>
                            <h2 className="mt-4 text-3xl font-black text-slate-900">{totalCourses}+</h2>
                            <p className="mt-2 text-sm font-medium text-slate-600">Total curated courses</p>
                        </div>

                        <div className="rounded-[1.75rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm shadow-sky-100">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-xl text-sky-700">
                                <FiUsers />
                            </div>
                            <h2 className="mt-4 text-3xl font-black text-slate-900">{totalCategories}</h2>
                            <p className="mt-2 text-sm font-medium text-slate-600">Focused learning categories</p>
                        </div>

                        <div className="rounded-[1.75rem] border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm shadow-amber-100">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-xl text-amber-700">
                                <IoIosStar />
                            </div>
                            <h2 className="mt-4 text-3xl font-black text-slate-900">{popularCourses}</h2>
                            <p className="mt-2 text-sm font-medium text-slate-600">Popular learner favorites</p>
                        </div>

                        <div className="rounded-[1.75rem] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm shadow-violet-100">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-xl text-violet-700">
                                <FiTrendingUp />
                            </div>
                            <h2 className="mt-4 text-3xl font-black text-slate-900">{newCourses}</h2>
                            <p className="mt-2 text-sm font-medium text-slate-600">Fresh trending releases</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-8">
                <div className="mb-10 text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
                        Full Course Catalog
                    </span>
                    <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Explore All Courses
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                        Choose the path that fits your pace, goals, and curiosity. Every course is structured to feel practical, guided, and worth your time.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {courses.map((course, index) => {
                        const matchedInstructor = instructors.find(
                            (instructor) => instructor.name === course.instructor
                        );

                        return (
                            <article
                                key={course.id}
                                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-3 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_-32px_rgba(16,185,129,0.55)]"
                            >
                                <div className="pointer-events-none absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-50 transition-transform duration-300 group-hover:scale-110"></div>

                                <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-80"></div>

                                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                                        <span className="rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                                            Course 0{index + 1}
                                        </span>
                                        {course.isNewCourse ? (
                                            <span className="rounded-full border border-sky-100/70 bg-sky-50/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 shadow-sm">
                                                New
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className="absolute bottom-4 right-4 rounded-full border border-orange-200/70 bg-orange-50/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-orange-500 shadow-sm">
                                        {course.level}
                                    </div>
                                </div>

                                <div className="relative flex flex-1 flex-col p-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="inline-flex rounded-full border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-orange-500 shadow-sm shadow-orange-100">
                                            {course.category}
                                        </span>
                                        {course.popularCourse ? (
                                            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>

                                    <h3 className="mt-4 text-2xl font-black leading-tight text-slate-900">
                                        {course.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600">
                                        {course.description}
                                    </p>

                                    <div className="mt-4 flex items-center gap-3 text-sm font-medium text-slate-500">
                                        <img
                                            src={matchedInstructor?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(course.instructor)}&background=ecfdf5&color=047857&bold=true`}
                                            alt={course.instructor}
                                            className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm shadow-emerald-100"
                                        />
                                        <div>
                                            <p className="font-semibold text-slate-700">{course.instructor}</p>
                                            <p className="text-xs text-slate-500">{matchedInstructor?.expertise || course.category}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between gap-3">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1 text-sm font-bold text-amber-700 shadow-sm shadow-amber-100">
                                            <span className="text-xl leading-none text-amber-400 drop-shadow-[0_2px_6px_rgba(251,191,36,0.35)]">
                                                <IoIosStar />
                                            </span>
                                            <span>{course.rating}/5</span>
                                        </span>
                                        <span className="rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1 text-sm font-bold tracking-wide text-emerald-700 shadow-sm shadow-emerald-100">
                                            {course.duration}
                                        </span>
                                    </div>

                                    <div className="mt-auto pt-5">
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-100 to-transparent"></div>

                                        <Link
                                            href={`/allcourses/${course.id}`}
                                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_30px_-18px_rgba(20,184,166,0.85)] transition duration-300 hover:scale-[1.01] hover:from-emerald-600 hover:via-teal-600 hover:to-sky-600"
                                        >
                                            View Course Details
                                            <FiArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AllCourses;
