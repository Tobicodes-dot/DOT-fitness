/* eslint-disable no-unused-vars */
import { use, useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Clock3,
  Dumbbell,
  Flame,
  HeartPulse,
  Home,
  Menu,
  Play,
  Plus,
  Settings,
  Target,
  Utensils,
  X,
  Zap,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", icon: Home },
  { label: "Training", icon: Dumbbell },
  { label: "Exercise library", icon: Activity },
  { label: "Progress", icon: ChartNoAxesCombined },
  { label: "Nutrition", icon: Utensils },
];

const exercises = [
  { name: "Push-ups", detail: "Chest · Triceps", sets: "3 × 12" },
  { name: "Pike push-ups", detail: "Shoulders", sets: "3 × 8" },
  { name: "Chair dips", detail: "Triceps", sets: "3 × 10" },
  { name: "Diamond push-ups", detail: "Triceps · Chest", sets: "2 × 8" },
];

const stats = [
  { label: "Sessions this week", value: "—", unit: "sessions", icon: Dumbbell },
  { label: "Current streak", value: "—", unit: "days", icon: Flame },
  { label: "Body weight", value: "60", unit: "kg · last recorded", icon: Activity },
  { label: "Weekly volume", value: "—", unit: "reps", icon: Target },
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const date = new Intl.DateTimeFormat("en", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  const isDashboard = activePage === "Dashboard";

  return (
    <div className="min-h-screen bg-dot-black text-white">

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-dot-border bg-dot-black p-6 transition-transform duration-300 lg:translate-x-0 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dot-lime text-dot-black">
              <Activity size={23} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight">
                D.O.T<span className="text-dot-lime">.</span>
              </h1>
              <p className="text-[9px] tracking-[2px] text-dot-muted">
                FITNESS SYSTEM
              </p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenu(false)}
            className="text-dot-muted lg:hidden"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-[10px] font-bold tracking-[2px] text-dot-muted">
            WORKSPACE
          </p>

          <nav className="space-y-2">
            {navigation.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => {
                  setActivePage(label);
                  setMobileMenu(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  activePage === label
                    ? "bg-dot-lime font-bold text-dot-black"
                    : "text-dot-muted hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={19} />
                {label}
                {activePage === label && (
                  <ChevronRight className="ml-auto" size={16} />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto">
          <div className="mb-6 rounded-2xl border border-dot-border bg-dot-surface p-4">
            <div className="mb-3 flex items-center gap-2">
              <Zap size={16} className="text-dot-lime" />
              <span className="text-xs font-bold">THE D.O.T STANDARD</span>
            </div>
            <p className="text-xs leading-5 text-dot-muted">
              Progress isn't promised. It's earned through consistency.
            </p>
          </div>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-dot-muted hover:bg-white/5 hover:text-white">
            <Settings size={18} />
            Settings
          </button>

          <div className="mt-4 flex items-center gap-3 border-t border-dot-border pt-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dot-lime/10 font-black text-dot-lime">
              M
            </div>
            <div>
              <p className="text-sm font-bold">Michael</p>
              <p className="text-[10px] text-dot-muted">PERSONAL ATHLETE</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE OVERLAY */}
      {mobileMenu && (
        <button
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={() => setMobileMenu(false)}
          aria-label="Close navigation overlay"
        />
      )}

      {/* MAIN */}
      <main className="min-h-screen lg:ml-64">

        {/* TOP BAR */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-dot-border bg-dot-black/90 px-5 backdrop-blur-xl md:px-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenu(true)}
              className="text-dot-muted lg:hidden"
              aria-label="Open navigation"
            >
              <Menu />
            </button>
            <div>
              <p className="text-xs text-dot-muted">{date}</p>
              <p className="text-sm font-semibold">
                Welcome back, Michael.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 rounded-full border border-dot-border px-3 py-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-dot-lime" />
              <span className="text-[10px] font-bold tracking-wider text-dot-muted">
                SYSTEM READY
              </span>
            </div>
            <button
              className="rounded-full border border-dot-border p-2.5 text-dot-muted transition hover:text-dot-lime"
              aria-label="Notifications"
            >
              <Bell size={18} />
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-5 md:p-10">

          {isDashboard ? (
            <>
              {/* INTRO */}
              <section className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-xs font-bold tracking-[3px] text-dot-lime">
                    DISCIPLINE OVER TEMPTATION.
                  </p>
                  <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                    Your training
                    <br />
                    <span className="text-dot-lime">starts here.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-dot-muted">
                    Every rep counts. Every session matters. Build the
                    strongest version of yourself.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-dot-border bg-dot-surface px-4 py-3">
                  <CalendarDays size={17} className="text-dot-lime" />
                  <span className="text-xs font-semibold">WEEKLY OVERVIEW</span>
                  <ChevronRight size={16} className="text-dot-muted" />
                </div>
              </section>

              {/* STATS */}
              <section className="mb-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {stats.map(({ label, value, unit, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-dot-border bg-dot-surface p-5 transition hover:border-dot-lime/40"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-xs text-dot-muted">{label}</p>
                      <Icon size={18} className="text-dot-lime" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black">{value}</span>
                      <span className="text-[10px] text-dot-muted">{unit}</span>
                    </div>
                  </div>
                ))}
              </section>

              {/* WORKOUT + SIDE PANEL */}
              <section className="grid gap-5 xl:grid-cols-3">

                {/* TODAY'S WORKOUT */}
                <div className="overflow-hidden rounded-2xl border border-dot-border bg-dot-surface xl:col-span-2">
                  <div className="flex items-center justify-between border-b border-dot-border px-6 py-5">
                    <div>
                      <p className="text-[10px] font-bold tracking-[2px] text-dot-lime">
                        TODAY'S MISSION
                      </p>
                      <h3 className="mt-1 text-lg font-bold">
                        Push strength
                      </h3>
                    </div>
                    <span className="rounded-full bg-dot-lime/10 px-3 py-1.5 text-[10px] font-bold text-dot-lime">
                      UPPER BODY
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      <div className="rounded-xl bg-white/[0.03] p-4">
                        <Clock3 size={17} className="mb-2 text-dot-lime" />
                        <p className="text-lg font-bold">35 min</p>
                        <p className="text-[10px] text-dot-muted">EST. DURATION</p>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] p-4">
                        <Dumbbell size={17} className="mb-2 text-dot-lime" />
                        <p className="text-lg font-bold">4</p>
                        <p className="text-[10px] text-dot-muted">EXERCISES</p>
                      </div>
                      <div className="col-span-2 rounded-xl bg-white/[0.03] p-4 sm:col-span-1">
                        <HeartPulse size={17} className="mb-2 text-dot-lime" />
                        <p className="text-lg font-bold">Moderate</p>
                        <p className="text-[10px] text-dot-muted">INTENSITY</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs font-bold tracking-wider">
                          WORKOUT BREAKDOWN
                        </p>
                        <p className="text-[10px] text-dot-muted">
                          4 MOVEMENTS
                        </p>
                      </div>

                      <div className="space-y-2">
                        {exercises.map((exercise, index) => (
                          <div
                            key={exercise.name}
                            className="flex items-center justify-between rounded-xl border border-dot-border px-4 py-3 transition hover:border-dot-lime/40"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-bold text-dot-lime">
                                0{index + 1}
                              </span>
                              <div>
                                <p className="text-sm font-semibold">
                                  {exercise.name}
                                </p>
                                <p className="mt-1 text-[10px] text-dot-muted">
                                  {exercise.detail}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-dot-muted">
                              {exercise.sets}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setWorkoutStarted(!workoutStarted)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-dot-lime py-4 text-sm font-black text-dot-black transition hover:bg-white"
                    >
                      {workoutStarted ? (
                        <>
                          <Check size={18} />
                          WORKOUT SESSION STARTED
                        </>
                      ) : (
                        <>
                          <Play size={17} fill="currentColor" />
                          START WORKOUT
                        </>
                      )}
                    </button>

                    <p className="mt-3 text-center text-[10px] text-dot-muted">
                      Starter workout preview · Not yet connected to the workout engine
                    </p>
                  </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="space-y-5">
                  <div className="rounded-2xl border border-dot-border bg-dot-surface p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-sm font-bold">Training focus</h3>
                      <Target size={18} className="text-dot-lime" />
                    </div>

                    {[
                      ["Shoulders", "Build strength"],
                      ["Chest", "Upper-body development"],
                      ["Triceps", "Push power"],
                      ["Core", "Stability and control"],
                    ].map(([name, detail]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between border-b border-dot-border py-3 last:border-0"
                      >
                        <div>
                          <p className="text-sm font-semibold">{name}</p>
                          <p className="mt-1 text-[10px] text-dot-muted">
                            {detail}
                          </p>
                        </div>
                        <ChevronRight size={16} className="text-dot-muted" />
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-dot-lime/20 bg-dot-lime/[0.06] p-6">
                    <Flame size={22} className="mb-4 text-dot-lime" />
                    <p className="text-sm font-bold">The daily standard.</p>
                    <p className="mt-2 text-xs leading-6 text-dot-muted">
                      Don't chase perfection. Show up, do the work, recover
                      properly and repeat.
                    </p>
                  </div>
                </div>
              </section>

              {/* BOTTOM */}
              <section className="mt-6 rounded-2xl border border-dot-border bg-dot-surface p-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[10px] font-bold tracking-[2px] text-dot-lime">
                      YOUR NEXT MILESTONE
                    </p>
                    <h3 className="mt-2 text-lg font-bold">
                      Handstand push-up progression
                    </h3>
                    <p className="mt-2 text-xs text-dot-muted">
                      Develop shoulder strength and overhead control.
                    </p>
                  </div>
                  <button
                    onClick={() => setActivePage("Training")}
                    className="flex items-center gap-2 text-xs font-bold text-dot-lime hover:text-white"
                  >
                    VIEW TRAINING <ArrowUpRight size={16} />
                  </button>
                </div>
              </section>
            </>
          ) : (
            <section className="rounded-2xl border border-dot-border bg-dot-surface p-8">
              <p className="mb-3 text-xs font-bold tracking-[2px] text-dot-lime">
                D.O.T FITNESS
              </p>
              <h2 className="text-3xl font-black">{activePage}</h2>
              <p className="mt-3 text-sm text-dot-muted">
                This module is next in our development roadmap.
              </p>
              <button
                onClick={() => setActivePage("Dashboard")}
                className="mt-6 rounded-xl bg-dot-lime px-5 py-3 text-xs font-black text-dot-black"
              >
                BACK TO DASHBOARD
              </button>
            </section>
          )}

          <footer className="mt-12 flex flex-col justify-between gap-3 border-t border-dot-border py-6 text-[10px] text-dot-muted sm:flex-row">
            <p>D.O.T FITNESS © 2026 · BUILT WITH DISCIPLINE.</p>
            <p>DISCIPLINE OVER TEMPTATION.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;


