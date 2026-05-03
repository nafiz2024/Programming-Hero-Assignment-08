import { FaLightbulb } from "react-icons/fa";
import { GiBrain, GiBullseye } from "react-icons/gi";

const LearningTips = () => {
    const tips = [
        {
            id: 1,
            icon: <FaLightbulb />,
            title: "Focused Learning Strategy",
            description: "Develop a consistent daily learning rhythm by isolating one core concept at a time, allowing deeper understanding and long-term retention instead of surface-level knowledge.",
        },
        {
            id: 2,
            icon: <GiBrain />,
            title: "Active Recall & Reflection",
            description: "Revisit and actively recall key concepts after each session to reinforce memory, strengthen understanding, and make it easier to apply knowledge in real-world scenarios.",
        },
        {
            id: 3,
            icon: <GiBullseye />,
            title: "Deliberate Practice System",
            description: "Engage in purposeful, task-driven practice with real-world mini projects, while tracking progress to maintain motivation and continuously measure improvement.",
        }
    ];

    return (
        <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-0">
            <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl"></div>
            <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-amber-100/40 blur-3xl"></div>

            <div className="relative mb-10 text-center">
                <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100 backdrop-blur-sm">
                    Smart Study Habits
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Learning Tips Section
                </h2>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    A few simple learning habits can make your progress more consistent, focused, and rewarding.
                </p>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tips.map((tip, index) => (
                    <div
                        key={tip.id}
                        className="group relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_-32px_rgba(16,185,129,0.55)]"
                    >
                        <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
                        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-50 transition-transform duration-300 group-hover:scale-110"></div>

                        <div className="relative flex items-start justify-between gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-white text-2xl shadow-md shadow-orange-100 ring-1 ring-orange-100">
                                {tip.icon}
                            </div>
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                                Tip 0{index + 1}
                            </span>
                        </div>

                        <h3 className="relative mt-8 text-2xl font-black text-slate-900">
                            {tip.title}
                        </h3>

                        <p className="relative mt-4 text-sm leading-7 text-slate-600">
                            {tip.description}
                        </p>

                        <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]"></span>
                            Better consistency, stronger results
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LearningTips;
