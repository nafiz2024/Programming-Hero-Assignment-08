import Link from "next/link";
import { IoIosStar } from "react-icons/io";

const PopularCourses = ({ allCourses , allInstructorData }) => {
    const popularCourses = allCourses.filter((course) => course.popularCourse === true);
    const instructorData = allInstructorData || [];

    return (
        <section className="px-0 py-8">
            <div className="relative mb-10 px-4 text-center sm:px-6 lg:px-0">
                <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl"></div>
                <span className="relative inline-flex rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100 backdrop-blur-sm">
                    Featured Learning Picks
                </span>
                <h1 className="relative mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Popular Courses Section
                </h1>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    Explore the most loved courses from our learners and start building practical skills with expert-led lessons.
                </p>
            </div>
            <div className="grid gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
                {popularCourses.length > 0 ? (
                    popularCourses.map((course, index) => {
                        const matchedInstructor = instructorData.find(
                            (instructor) => instructor.name === course.instructor
                        );

                        return (
                        <div
                            key={course.id}
                            className="group relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-3 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_-32px_rgba(16,185,129,0.55)]"
                        >
                            <div className="absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-50 transition-transform duration-300 group-hover:scale-110"></div>

                            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-70"></div>
                                <div className="absolute right-4 top-4 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                                    Top 0{index + 1}
                                </div>
                            </div>

                            <div className="relative p-3">
                                <p className="inline-flex rounded-full border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-orange-500 shadow-sm shadow-orange-100">
                                    {course.category}
                                </p>

                                <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900">
                                    {course.title}
                                </h2>

                                <div className="mt-3 flex items-center gap-3 text-sm font-medium text-slate-500">
                                    <img
                                        src={matchedInstructor?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(course.instructor)}&background=ecfdf5&color=047857&bold=true`}
                                        alt={course.instructor}
                                        className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm shadow-emerald-100"
                                    />
                                    <span>{course.instructor}</span>
                                </div>

                                <div className="mt-3 flex items-center justify-between gap-3 text-base font-semibold text-slate-500">
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

                                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-emerald-100 to-transparent"></div>

                                <button className="mt-5 w-full rounded-2xl border-0 bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_30px_-18px_rgba(249,115,22,0.85)] transition duration-300 hover:scale-[1.01] hover:from-amber-500 hover:via-orange-500 hover:to-orange-600">
                                    <Link href={`/allcourse/${course.id}`} className="flex items-center justify-center gap-2">
                                        View Course
                                    </Link>
                                </button>
                            </div>
                        </div>
                    )})
                ) : (
                    <p className="col-span-full rounded-3xl border border-dashed border-emerald-200 bg-emerald-50 px-6 py-10 text-center font-medium text-emerald-700">
                        No popular courses found.
                    </p>
                )}
            </div>
        </section>
    );
};

export default PopularCourses;
