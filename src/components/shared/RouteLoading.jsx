const shimmerCard =
  'overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur';

const LoadingDots = ({ light = false }) => {
  const dotColor = light ? 'bg-white/75' : 'bg-emerald-500';

  return (
    <div className="flex items-center gap-2" aria-label="Loading">
      <span
        className={`h-2.5 w-2.5 rounded-full ${dotColor} animate-bounce [animation-delay:-0.3s]`}
      />
      <span
        className={`h-2.5 w-2.5 rounded-full ${dotColor} animate-bounce [animation-delay:-0.15s]`}
      />
      <span className={`h-2.5 w-2.5 rounded-full ${dotColor} animate-bounce`} />
    </div>
  );
};

export const MainRouteLoading = () => {
  return (
    <section className="animate-pulse px-3 pb-8 pt-2 sm:px-5 sm:pt-3 lg:px-0">
      <div
        className={`${shimmerCard} bg-gradient-to-br from-white via-slate-50 to-sky-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:px-16 xl:py-14`}
      >
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:gap-8 xl:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <LoadingDots />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Loading
              </span>
            </div>
            <div className="h-11 w-44 rounded-full bg-slate-200/80" />
            <div className="mt-5 space-y-3">
              <div className="h-10 w-full max-w-xl rounded-2xl bg-slate-200/80 sm:h-12" />
              <div className="h-10 w-11/12 max-w-lg rounded-2xl bg-slate-200/70 sm:h-12" />
              <div className="h-10 w-4/5 max-w-md rounded-2xl bg-slate-200/60 sm:h-12" />
            </div>
            <div className="mt-5 h-1 w-16 rounded-full bg-slate-200/80" />
            <div className="mt-6 space-y-3">
              <div className="h-4 w-full max-w-2xl rounded-full bg-slate-200/70" />
              <div className="h-4 w-11/12 max-w-xl rounded-full bg-slate-200/60" />
              <div className="h-4 w-4/5 max-w-lg rounded-full bg-slate-200/50" />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="h-12 w-full rounded-2xl bg-slate-200/80 sm:w-44" />
              <div className="h-12 w-full rounded-2xl bg-slate-200/70 sm:w-44" />
            </div>
            <div className="mt-8 grid gap-3 rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 sm:block sm:border-b-0 sm:border-r sm:pb-0 sm:last:border-r-0 sm:pr-4"
                >
                  <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200/80 sm:h-11 sm:w-11" />
                  <div className="min-w-0 flex-1 sm:mt-3">
                    <div className="h-7 w-20 rounded-xl bg-slate-200/80" />
                    <div className="mt-2 h-4 w-full rounded-full bg-slate-200/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-first lg:order-none">
            <div className="aspect-[4/3] rounded-[1.75rem] bg-slate-200/80 sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[520px]" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className={`${shimmerCard} p-5 sm:p-6`}>
            <div className="h-44 rounded-[1.5rem] bg-slate-200/80" />
            <div className="mt-5 h-6 w-3/4 rounded-full bg-slate-200/80" />
            <div className="mt-3 space-y-2">
              <div className="h-4 rounded-full bg-slate-200/60" />
              <div className="h-4 w-11/12 rounded-full bg-slate-200/50" />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div className="h-10 w-10 rounded-full bg-slate-200/80" />
              <div className="h-5 w-24 rounded-full bg-slate-200/70" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const AuthRouteLoading = () => {
  return (
    <section className="animate-pulse px-3 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto flex min-h-[calc(100vh-220px)] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-8 bg-[linear-gradient(160deg,_rgba(16,185,129,0.96),_rgba(5,150,105,0.92))] p-6 sm:p-8 lg:p-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 shadow-sm">
                <LoadingDots light />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
                  Loading
                </span>
              </div>
              <div className="h-9 w-36 rounded-full bg-white/20" />
              <div className="mt-6 space-y-3">
                <div className="h-10 w-5/6 rounded-2xl bg-white/20" />
                <div className="h-10 w-4/5 rounded-2xl bg-white/15" />
              </div>
            </div>
            <div className="mx-auto h-24 w-24 rounded-full bg-white/15 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4"
                >
                  <div className="h-7 w-20 rounded-xl bg-white/20" />
                  <div className="mt-3 h-4 w-full rounded-full bg-white/15" />
                  <div className="mt-2 h-4 w-4/5 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-10">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 text-center lg:text-left">
                <div className="mx-auto h-8 w-32 rounded-full bg-slate-200/80 lg:mx-0" />
                <div className="mx-auto mt-4 h-10 w-52 rounded-2xl bg-slate-200/80 lg:mx-0" />
                <div className="mt-4 space-y-2">
                  <div className="mx-auto h-4 w-full rounded-full bg-slate-200/60 lg:mx-0" />
                  <div className="mx-auto h-4 w-5/6 rounded-full bg-slate-200/50 lg:mx-0" />
                </div>
              </div>

              <div className="space-y-5">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="space-y-2">
                    <div className="h-4 w-20 rounded-full bg-slate-200/70" />
                    <div className="h-12 rounded-2xl bg-slate-200/70" />
                  </div>
                ))}
                <div className="h-12 rounded-2xl bg-slate-200/80" />
                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200/80" />
                  <div className="h-4 w-10 rounded-full bg-slate-200/70" />
                  <div className="h-px flex-1 bg-slate-200/80" />
                </div>
                <div className="h-12 rounded-2xl bg-slate-200/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
