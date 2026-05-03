import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiAward, FiBookOpen, FiClock, FiLayers, FiPlayCircle, FiUsers } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { getCourseDetails, getInstructorData } from "@/lib/data";

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const courseDetails = await getCourseDetails(id);

    if (!courseDetails || Array.isArray(courseDetails)) {
        notFound();
    }

    const allInstructorData = await getInstructorData();
    const matchedInstructor = allInstructorData.find(
        (instructor) => instructor.name === courseDetails.instructor
    );

    const curriculumList = Array.isArray(courseDetails.curriculum)
        ? courseDetails.curriculum
        : [];

    return (
        <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-0">
            <div className="pointer-events-none absolute left-0 top-16 h-44 w-44 rounded-full bg-emerald-100/40 blur-3xl"></div>
            <div className="pointer-events-none absolute right-0 top-24 h-52 w-52 rounded-full bg-amber-100/40 blur-3xl"></div>

            <div className="mb-6">
                <Link
                    href="/allcourses"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100 transition hover:bg-emerald-50"
                >
                    <FiArrowLeft />
                    Back To All Courses
                </Link>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.45)] backdrop-blur-sm sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-50 blur-2xl"></div>

                <div className="grid gap-8 lg:grid-cols-[1fr_.98fr]">
                    <div className="relative overflow-hidden rounded-[1.9rem] bg-slate-100">
                        <img
                            src={courseDetails.image}
                            alt={courseDetails.title}
                            className="h-full min-h-[340px] w-full object-cover lg:min-h-[580px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent"></div>

                        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                            <span className="rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                                {courseDetails.category}
                            </span>
                            <span className="rounded-full border border-orange-200/70 bg-orange-50/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-orange-500 shadow-sm">
                                {courseDetails.level}
                            </span>
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                            <p className="text-sm font-medium text-emerald-100">SkillSphere Course Preview</p>
                            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                                {courseDetails.title}
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                                {courseDetails.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
                                <FiBookOpen />
                                Full Course Details
                            </span>

                            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                                {courseDetails.title}
                            </h1>

                            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

                            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                                {courseDetails.description}
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[1.5rem] border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm shadow-amber-100">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-xl text-amber-700">
                                    <IoIosStar />
                                </div>
                                <h3 className="mt-4 text-3xl font-black text-slate-900">{courseDetails.rating}/5</h3>
                                <p className="mt-2 text-sm font-medium text-slate-600">Learner satisfaction rating</p>
                            </div>

                            <div className="rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm shadow-emerald-100">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl text-emerald-700">
                                    <FiClock />
                                </div>
                                <h3 className="mt-4 text-3xl font-black text-slate-900">{courseDetails.duration}</h3>
                                <p className="mt-2 text-sm font-medium text-slate-600">Estimated guided duration</p>
                            </div>

                            <div className="rounded-[1.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm shadow-sky-100">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-xl text-sky-700">
                                    <FiLayers />
                                </div>
                                <h3 className="mt-4 text-3xl font-black text-slate-900">{courseDetails.level}</h3>
                                <p className="mt-2 text-sm font-medium text-slate-600">Recommended skill level</p>
                            </div>

                            <div className="rounded-[1.5rem] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm shadow-violet-100">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-xl text-violet-700">
                                    <FiPlayCircle />
                                </div>
                                <h3 className="mt-4 text-3xl font-black text-slate-900">{curriculumList.length}</h3>
                                <p className="mt-2 text-sm font-medium text-slate-600">Core learning modules</p>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-emerald-100/80 bg-white p-5 shadow-sm shadow-emerald-100">
                            <div className="flex items-center gap-4">
                                <img
                                    src={matchedInstructor?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(courseDetails.instructor)}&background=ecfdf5&color=047857&bold=true`}
                                    alt={courseDetails.instructor}
                                    className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white shadow-md shadow-emerald-100"
                                />
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
                                        Course Instructor
                                    </p>
                                    <h3 className="mt-1 text-2xl font-black text-slate-900">
                                        {courseDetails.instructor}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-slate-500">
                                        {matchedInstructor?.expertise || courseDetails.category}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {matchedInstructor?.description || "An experienced mentor focused on practical learning, clear explanations, and career-ready skill development."}
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1 text-sm font-bold text-amber-700 shadow-sm shadow-amber-100">
                                    <IoIosStar className="text-xl leading-none text-amber-400" />
                                    {matchedInstructor?.rating || courseDetails.rating}/5 Instructor Rating
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1 text-sm font-bold text-emerald-700 shadow-sm shadow-emerald-100">
                                    <FiUsers />
                                    {matchedInstructor?.courses || 1}+ Courses
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-8 grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
                <div className="rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_20px_60px_-34px_rgba(16,185,129,0.4)] sm:p-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
                        <FiAward />
                        Course Overview
                    </span>

                    <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                        What you&apos;ll build through this course
                    </h2>
                    <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

                    <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                        This course is designed to move you from foundational understanding to confident execution. You&apos;ll learn key concepts, apply them through practical modules, and finish with a clearer roadmap for using these skills in real projects.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-5">
                            <h3 className="text-lg font-black text-slate-900">Practical Focus</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Each module emphasizes real-world application instead of passive theory.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-5">
                            <h3 className="text-lg font-black text-slate-900">Skill Progression</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Lessons are arranged to help you build confidence step by step without overwhelm.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_20px_60px_-34px_rgba(16,185,129,0.4)] sm:p-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
                        <FiBookOpen />
                        Course Curriculum
                    </span>

                    <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
                        Static learning roadmap
                    </h2>
                    <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

                    <div className="mt-8 space-y-4">
                        {curriculumList.map((topic, index) => (
                            <div
                                key={topic}
                                className="flex items-start gap-4 rounded-[1.5rem] border border-emerald-100 bg-gradient-to-r from-emerald-50/70 to-white p-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-sm font-black text-emerald-700">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900">{topic}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
