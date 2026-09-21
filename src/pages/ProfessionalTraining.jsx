import { useState } from "react";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Play,
  Search,
  Star,
  Target,
  Users,
  Video,
  X,
} from "lucide-react";

const trainingPrograms = [
  {
    id: 1,
    title: "Professional Communication",
    description:
      "Improve workplace communication, presentation skills, and professional confidence.",
    category: "Communication",
    level: "Beginner",
    duration: "4 Weeks",
    lessons: 12,
    progress: 72,
    color: "from-blue-500 to-indigo-600",
    icon: Users,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Leadership & Management",
    description:
      "Develop leadership skills and learn how to manage teams effectively.",
    category: "Leadership",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: 18,
    progress: 45,
    color: "from-violet-500 to-purple-600",
    icon: BriefcaseBusiness,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Digital Skills Mastery",
    description:
      "Build essential digital skills for modern professional environments.",
    category: "Technology",
    level: "Intermediate",
    duration: "5 Weeks",
    lessons: 15,
    progress: 28,
    color: "from-cyan-500 to-blue-600",
    icon: GraduationCap,
    rating: 4.9,
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "Learn practical project planning, execution, and team coordination.",
    category: "Management",
    level: "Advanced",
    duration: "8 Weeks",
    lessons: 24,
    progress: 0,
    color: "from-emerald-500 to-teal-600",
    icon: Target,
    rating: 4.7,
  },
];

const upcomingSessions = [
  {
    title: "Effective Team Communication",
    date: "Sep 22",
    time: "10:00 AM",
    trainer: "Sarah Wilson",
    type: "Live Session",
  },
  {
    title: "Leadership Essentials",
    date: "Sep 25",
    time: "2:00 PM",
    trainer: "Michael Brown",
    type: "Workshop",
  },
  {
    title: "Project Planning Masterclass",
    date: "Sep 28",
    time: "11:30 AM",
    trainer: "David Miller",
    type: "Live Session",
  },
];

const categories = [
  "All",
  "Communication",
  "Leadership",
  "Technology",
  "Management",
];

export default function ProfessionalTraining() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = trainingPrograms.filter((program) => {
    const matchesCategory =
      selectedCategory === "All" || program.category === selectedCategory;

    const matchesSearch =
      program.title.toLowerCase().includes(search.toLowerCase()) ||
      program.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="h-screen overflow-y-auto  bg-slate-50/70">
      {/* Header */}
      <header className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-indigo-600">
                <GraduationCap size={17} />
                Learning & Development
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Professional Training
              </h1>

              <p className="mt-1 max-w-2xl text-sm text-slate-500">
                Build valuable skills, improve your performance, and grow your
                professional career.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-xl">
              <BookOpen size={17} />
              Explore All Courses
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8">
        {/* Hero / Progress */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 p-7 text-white shadow-xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_350px] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur">
                <Award size={14} />
                Your Learning Journey
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight">
                Keep learning. Keep growing.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                You're making great progress. Continue your training to unlock
                new skills and earn professional certifications.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-indigo-700 transition hover:bg-blue-50">
                  <Play size={15} fill="currentColor" />
                  Continue Learning
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                  <Award size={15} />
                  My Certificates
                </button>
              </div>
            </div>

            {/* Progress circle */}
            <div className="flex items-center justify-center">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-[14px] border-white/10">
                <div
                  className="absolute inset-[-14px] rounded-full"
                  style={{
                    background: "conic-gradient(#60a5fa 68%, transparent 68%)",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 0)",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 0)",
                  }}
                />

                <div className="text-center">
                  <p className="text-4xl font-bold">68%</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    Overall Progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={BookOpen}
            label="Courses Enrolled"
            value="8"
            color="blue"
          />

          <StatCard
            icon={CheckCircle2}
            label="Courses Completed"
            value="5"
            color="emerald"
          />

          <StatCard
            icon={Clock3}
            label="Learning Hours"
            value="42h"
            color="violet"
          />

          <StatCard icon={Award} label="Certificates" value="3" color="amber" />
        </section>

        {/* Search + Categories */}
        <section>
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Training Programs
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Continue your current programs or discover something new.
              </p>
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search training..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Training Cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredPrograms.map((program) => {
              const Icon = program.icon;

              return (
                <div
                  key={program.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  {/* Card top */}
                  <div
                    className={`relative h-32 overflow-hidden bg-gradient-to-br ${program.color} p-5`}
                  >
                    <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10" />
                    <div className="absolute -bottom-10 -left-5 h-24 w-24 rounded-full bg-white/10" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                        <Icon size={21} />
                      </div>

                      <div className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                        <Star size={12} fill="currentColor" />
                        {program.rating}
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                      <span>{program.category}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-slate-400">{program.level}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      {program.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                      {program.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-[11px] font-medium text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock3 size={13} />
                        {program.duration}
                      </span>

                      <span className="flex items-center gap-1">
                        <BookOpen size={13} />
                        {program.lessons} Lessons
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="mt-5">
                      <div className="mb-1.5 flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-slate-500">
                          Progress
                        </span>
                        <span className="font-bold text-indigo-600">
                          {program.progress}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${program.color} transition-all`}
                          style={{ width: `${program.progress}%` }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700"
                    >
                      {program.progress > 0
                        ? "Continue Training"
                        : "Start Training"}

                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom section */}
        <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Upcoming */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Upcoming Sessions
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Don't miss your upcoming live training sessions.
                </p>
              </div>

              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800">
                View calendar
              </button>
            </div>

            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <div
                  key={session.title}
                  className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/30 sm:flex-row sm:items-center"
                >
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <span className="text-[10px] font-bold uppercase">Sep</span>
                    <span className="text-lg font-bold">
                      {session.date.split(" ")[1]}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-bold text-slate-900">
                        {session.title}
                      </h3>

                      <span className="hidden rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-700 sm:block">
                        {session.type}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock3 size={12} />
                        {session.time}
                      </span>

                      <span className="flex items-center gap-1">
                        <Users size={12} />
                        {session.trainer}
                      </span>
                    </div>
                  </div>

                  <button className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600">
                    Join
                    <ChevronRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Goal */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-lg">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <Target size={21} />
              </div>

              <h2 className="mt-5 text-xl font-bold">Your Learning Goal</h2>

              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Complete 3 more courses this month and earn your next
                professional certificate.
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs font-semibold">
                  <span>Monthly Goal</span>
                  <span>2 / 5 Courses</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[40%] rounded-full bg-white" />
                </div>
              </div>

              <button className="mt-6 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-indigo-700 transition hover:bg-indigo-50">
                View My Goals
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Training Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div
              className={`relative h-36 bg-gradient-to-br ${selectedProgram.color} p-6 text-white`}
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <X size={18} />
              </button>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <selectedProgram.icon size={22} />
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                {selectedProgram.category}
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {selectedProgram.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {selectedProgram.description}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <InfoBox
                  icon={Clock3}
                  label="Duration"
                  value={selectedProgram.duration}
                />

                <InfoBox
                  icon={BookOpen}
                  label="Lessons"
                  value={selectedProgram.lessons}
                />

                <InfoBox
                  icon={Star}
                  label="Rating"
                  value={selectedProgram.rating}
                />
              </div>

              <button
                onClick={() => setSelectedProgram(null)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20"
              >
                <Play size={16} fill="currentColor" />
                Start Training
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[color]}`}
        >
          <Icon size={19} />
        </div>

        <ChevronRight size={16} className="text-slate-300" />
      </div>

      <p className="mt-4 text-xs font-semibold text-slate-500">{label}</p>

      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function InfoBox({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <Icon size={15} className="mx-auto text-indigo-500" />
      <p className="mt-1 text-[10px] font-medium text-slate-400">{label}</p>
      <p className="mt-0.5 text-xs font-bold text-slate-700">{value}</p>
    </div>
  );
}
