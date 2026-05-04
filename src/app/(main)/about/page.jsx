import {
  FiAward,
  FiBookOpen,
  FiCompass,
  FiLayers,
  FiTarget,
  FiUsers,
} from 'react-icons/fi';

const coreValues = [
  {
    id: 1,
    icon: <FiBookOpen />,
    title: 'Practical Learning',
    description:
      'We focus on skills that feel useful in real projects so learning stays relevant, motivating, and career-ready.',
  },
  {
    id: 2,
    icon: <FiUsers />,
    title: 'Learner First',
    description:
      'Every course is shaped to be clear, supportive, and easy to follow whether you are just starting or leveling up.',
  },
  {
    id: 3,
    icon: <FiTarget />,
    title: 'Growth With Direction',
    description:
      'Our learning paths help students move with clarity instead of guessing what to study next.',
  },
];

const platformHighlights = [
  {
    id: 1,
    icon: <FiLayers />,
    value: '500+',
    label: 'Structured learning modules',
  },
  {
    id: 2,
    icon: <FiAward />,
    value: '100+',
    label: 'Expert-led guided lessons',
  },
  {
    id: 3,
    icon: <FiCompass />,
    value: '50K+',
    label: 'Learners building momentum',
  },
];

const AboutPage = () => {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-0">
      <div className="pointer-events-none absolute left-0 top-12 h-44 w-44 rounded-full bg-emerald-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-24 h-52 w-52 rounded-full bg-amber-100/40 blur-3xl"></div>

      <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.45)] backdrop-blur-sm sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-50 blur-2xl"></div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
              About SkillSphere
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              A modern learning space designed for focused growth
            </h1>

            <div className="mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              SkillSphere is built to make online learning feel clearer,
              smarter, and more motivating. We combine structured courses,
              supportive guidance, and practical outcomes to help learners grow
              with confidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {platformHighlights.map((item) => (
              <div
                key={item.id}
                className="rounded-[1.75rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm shadow-emerald-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl text-emerald-700">
                  {item.icon}
                </div>
                <h2 className="mt-4 text-3xl font-black text-slate-900">
                  {item.value}
                </h2>
                <p className="mt-2 text-sm font-medium leading-7 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_20px_60px_-34px_rgba(16,185,129,0.4)] sm:p-8">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
            Our Mission
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Making meaningful learning more accessible and engaging
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

          <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
            We believe learning should feel guided, not overwhelming. Our
            mission is to help learners gain practical skills through
            well-structured lessons, supportive pacing, and course experiences
            that feel useful beyond the screen.
          </p>

          <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
            Whether someone wants to begin web development, understand design,
            or build confidence in data and digital skills, SkillSphere is
            shaped to reduce confusion and create steady forward progress.
          </p>
        </div>

        <div className="rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-[0_20px_60px_-34px_rgba(16,185,129,0.4)] sm:p-8">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
            Why We Exist
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
            Learning should feel intentional, calm, and rewarding
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"></div>

          <div className="mt-8 space-y-4">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl text-emerald-700">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
