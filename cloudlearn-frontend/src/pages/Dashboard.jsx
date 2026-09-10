import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  Flame,
  Play,
  Settings,
  Target,
  Trophy,
  User,
} from "lucide-react";
import Navbar from "../components/Navbar";

const enrolledCourses = [
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    category: "AWS",
    progress: 72,
    completedLessons: 30,
    totalLessons: 42,
    duration: "8h 20m",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "aws-networking-vpc",
    title: "AWS Networking & VPC",
    category: "Cloud Infrastructure",
    progress: 38,
    completedLessons: 11,
    totalLessons: 29,
    duration: "6h 10m",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "high-availability-aws",
    title: "Designing Highly Available AWS Architectures",
    category: "AWS Architecture",
    progress: 15,
    completedLessons: 4,
    totalLessons: 27,
    duration: "7h 45m",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
];

const recentActivity = [
  {
    title: "Completed: AWS Storage",
    time: "Today, 10:42 AM",
    icon: CheckCircle2,
  },
  {
    title: "Watched: Introduction to S3",
    time: "Yesterday, 8:20 PM",
    icon: Play,
  },
  {
    title: "Started AWS Networking & VPC",
    time: "2 days ago",
    icon: BookOpen,
  },
];

export default function Dashboard() {
  const continueCourse = enrolledCourses[0];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8">

        {/* HEADER */}
        <section className="mb-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-indigo-400">
                Student Dashboard
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome back, Amrit 👋
              </h1>

              <p className="mt-2 text-slate-400">
                Keep learning and move one step closer to your cloud career.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
            >
              Browse courses
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* STATS */}
        <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={BookOpen}
            label="Courses enrolled"
            value="3"
            detail="+1 this month"
          />

          <StatCard
            icon={Clock3}
            label="Learning hours"
            value="18.5"
            detail="+4.2 this week"
          />

          <StatCard
            icon={Target}
            label="Average progress"
            value="42%"
            detail="Keep going"
          />

          <StatCard
            icon={Flame}
            label="Learning streak"
            value="7 days"
            detail="Personal best"
          />

        </section>

        {/* CONTINUE LEARNING */}
        <section className="mb-10">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Continue learning
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Pick up exactly where you left off.
              </p>
            </div>

            <Link
              to={`/learn/${continueCourse.id}`}
              className="hidden items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 sm:flex"
            >
              Open course
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">

            <div className="grid lg:grid-cols-[300px_1fr]">

              {/* IMAGE */}
              <div className="relative h-52 lg:h-full">
                <img
                  src={continueCourse.image}
                  alt={continueCourse.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium backdrop-blur">
                  {continueCourse.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 lg:p-8">

                <div className="flex flex-col justify-between gap-5 sm:flex-row">
                  <div>
                    <p className="text-sm text-indigo-400">
                      Continue where you left off
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {continueCourse.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Lesson 30 of {continueCourse.totalLessons} ·
                      approximately 35 minutes remaining
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <Play size={22} fill="currentColor" />
                  </div>
                </div>

                <div className="mt-7">

                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">
                      Course progress
                    </span>

                    <span className="font-semibold">
                      {continueCourse.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{
                        width: `${continueCourse.progress}%`,
                      }}
                    />
                  </div>

                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to={`/learn/${continueCourse.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/10 transition hover:scale-[1.01]"
                  >
                    <Play size={16} fill="currentColor" />
                    Continue learning
                  </Link>

                  <Link
                    to={`/courses/${continueCourse.id}`}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05]"
                  >
                    View course
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

          {/* MY COURSES */}
          <section>

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  My courses
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your active learning paths.
                </p>
              </div>

              <Link
                to="/courses"
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                View all
              </Link>
            </div>

            <div className="space-y-4">

              {enrolledCourses.map((course) => (
                <CourseProgressCard
                  key={course.id}
                  course={course}
                />
              ))}

            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            {/* PROFILE CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold">
                  AR
                </div>

                <div>
                  <h3 className="font-bold">
                    Amrit Raj
                  </h3>

                  <p className="text-sm text-slate-500">
                    Cloud Learner
                  </p>
                </div>

              </div>

              <Link
                to="/profile"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.05]"
              >
                <User size={16} />
                View profile
              </Link>

            </div>

            {/* ACHIEVEMENT */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6">

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl" />

              <div className="relative">

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                  <Trophy size={21} />
                </div>

                <h3 className="font-bold">
                  Keep your momentum
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Complete 3 more lessons this week to maintain your
                  learning streak.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-yellow-400">
                  <Flame size={16} />
                  7 day streak
                </div>

              </div>
            </div>

            {/* ACTIVITY */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">

              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-bold">
                  Recent activity
                </h3>

                <BarChart3
                  size={17}
                  className="text-slate-600"
                />
              </div>

              <div className="space-y-5">

                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={index}
                      className="flex gap-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Icon size={15} />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-600">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </aside>
        </div>

        {/* CAREER CTA */}
        <section className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-cyan-500/10 p-8 sm:p-10">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
                <Award size={17} />
                Build your cloud career
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Turn your learning into real-world skills.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Practice AWS architecture, networking, security and
                infrastructure through hands-on learning paths.
              </p>

            </div>

            <Link
              to="/courses"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Explore learning paths
              <ArrowRight size={17} />
            </Link>

          </div>

        </section>

      </main>
    </div>
  );
}


/* ---------------- COMPONENTS ---------------- */

function StatCard({ icon: Icon, label, value, detail }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:bg-white/[0.05]">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {label}
          </p>

          <p className="mt-2 text-2xl font-bold">
            {value}
          </p>

          <p className="mt-1 text-xs text-emerald-400">
            {detail}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
          <Icon size={19} />
        </div>

      </div>

    </div>
  );
}


function CourseProgressCard({ course }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:bg-white/[0.05]">

      <div className="flex flex-col gap-4 sm:flex-row">

        <img
          src={course.image}
          alt={course.title}
          className="h-32 w-full rounded-xl object-cover sm:h-24 sm:w-36"
        />

        <div className="min-w-0 flex-1">

          <div className="flex flex-col justify-between gap-2 sm:flex-row">

            <div>
              <p className="text-xs font-medium text-indigo-400">
                {course.category}
              </p>

              <h3 className="mt-1 truncate font-semibold">
                {course.title}
              </h3>

              <p className="mt-1 text-xs text-slate-600">
                {course.completedLessons} / {course.totalLessons} lessons
              </p>
            </div>

            <span className="text-sm font-bold text-slate-300">
              {course.progress}%
            </span>

          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              style={{
                width: `${course.progress}%`,
              }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between">

            <span className="text-xs text-slate-600">
              {course.duration}
            </span>

            <Link
              to={`/learn/${course.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Continue
              <ArrowRight size={13} />
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}