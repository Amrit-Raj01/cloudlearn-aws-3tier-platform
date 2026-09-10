import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Cloud,
  Server,
  Database,
  ShieldCheck,
  Terminal,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    description:
      "Build a strong foundation in AWS services, networking, security and cloud architecture.",
    category: "AWS",
    level: "Beginner",
    duration: "8h 20m",
    rating: "4.9",
    students: "12.4K",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "aws-networking",
    title: "AWS Networking & VPC",
    description:
      "Understand VPCs, subnets, route tables, NAT gateways, security groups and connectivity.",
    category: "Networking",
    level: "Intermediate",
    duration: "6h 45m",
    rating: "4.8",
    students: "8.7K",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cloud-architecture",
    title: "Designing Highly Available AWS Architectures",
    description:
      "Learn how to design scalable and highly available applications using AWS infrastructure.",
    category: "Architecture",
    level: "Intermediate",
    duration: "10h 10m",
    rating: "4.9",
    students: "6.2K",
    price: "$39",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36">

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

            {/* Left */}
            <div>

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                <Sparkles size={15} />
                Build real cloud skills
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

                Master the cloud.

                <span className="block bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Build what matters.
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Learn AWS, cloud infrastructure, networking and modern
                architecture through practical, project-based courses.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/courses"
                  className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Explore courses
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:bg-white/[0.08]">
                  <Play size={17} />
                  See how it works
                </button>

              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-emerald-400"
                  />
                  Hands-on projects
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-emerald-400"
                  />
                  Cloud focused
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-emerald-400"
                  />
                  Learn at your pace
                </div>

              </div>
            </div>

            {/* Right architecture visual */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-violet-950/20 backdrop-blur-xl">

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500">
                      Learning path
                    </div>

                    <div className="mt-1 text-xl font-semibold">
                      AWS Cloud Engineer
                    </div>
                  </div>

                  <div className="rounded-xl bg-emerald-500/10 px-3 py-2 text-xs text-emerald-400">
                    68% complete
                  </div>
                </div>

                <div className="mb-7 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                </div>

                <div className="space-y-3">

                  <PathItem
                    icon={<Cloud size={18} />}
                    title="AWS Fundamentals"
                    status="Completed"
                  />

                  <PathItem
                    icon={<Server size={18} />}
                    title="Compute & EC2"
                    status="Completed"
                  />

                  <PathItem
                    icon={<Database size={18} />}
                    title="Storage & Databases"
                    status="In progress"
                    active
                  />

                  <PathItem
                    icon={<ShieldCheck size={18} />}
                    title="Security & IAM"
                    status="Locked"
                  />

                  <PathItem
                    icon={<Terminal size={18} />}
                    title="Infrastructure Project"
                    status="Locked"
                  />

                </div>

              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#0c1022]/90 px-5 py-4 shadow-xl backdrop-blur-xl">

                <div className="text-xs text-slate-500">
                  Today's progress
                </div>

                <div className="mt-1 text-lg font-semibold">
                  42 minutes
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto mt-28 max-w-7xl px-6">

        <div className="grid grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] md:grid-cols-4">

          <Stat number="50K+" label="Learners" />
          <Stat number="120+" label="Cloud courses" />
          <Stat number="98%" label="Positive reviews" />
          <Stat number="24/7" label="Learn anytime" />

        </div>

      </section>

      {/* COURSES */}
      <section className="mx-auto mt-32 max-w-7xl px-6">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Featured learning
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Learn skills that actually ship
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Practical courses designed around real cloud infrastructure
              and production scenarios.
            </p>
          </div>

          <Link
            to="/courses"
            className="flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300"
          >
            View all courses
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="mx-auto mt-32 max-w-7xl px-6"
      >

        <div className="mb-10">

          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Explore
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Choose your path
          </h2>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Category
            icon={<Cloud />}
            title="AWS"
            courses="42 courses"
          />

          <Category
            icon={<Server />}
            title="Cloud Infrastructure"
            courses="28 courses"
          />

          <Category
            icon={<Database />}
            title="Cloud Databases"
            courses="19 courses"
          />

          <Category
            icon={<ShieldCheck />}
            title="Cloud Security"
            courses="24 courses"
          />

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto mt-32 max-w-7xl px-6 pb-20">

        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-cyan-500/10 p-10 text-center sm:p-16">

          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative">

            <h2 className="text-3xl font-bold sm:text-5xl">
              Ready to build your cloud career?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Start learning AWS and build the skills that matter in
              real-world cloud environments.
            </p>

            <Link
              to="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Start learning
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        id="about"
        className="border-t border-white/10"
      >

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-sm text-slate-500 sm:flex-row">

          <div>
            © 2026 CloudLearn. Learn. Build. Scale.
          </div>

          <div className="flex gap-6">
            <span>Courses</span>
            <span>About</span>
            <span>Privacy</span>
          </div>

        </div>

      </footer>

    </div>
  );
}


/* Components */

function PathItem({ icon, title, status, active }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl border p-4 ${
        active
          ? "border-violet-500/30 bg-violet-500/10"
          : "border-white/5 bg-white/[0.02]"
      }`}
    >

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-violet-400">
        {icon}
      </div>

      <div className="flex-1">
        <div className="text-sm font-medium">
          {title}
        </div>

        <div
          className={`mt-1 text-xs ${
            active
              ? "text-violet-400"
              : "text-slate-500"
          }`}
        >
          {status}
        </div>
      </div>

      {active && (
        <div className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
      )}

    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="px-6 py-7 text-center">

      <div className="text-2xl font-bold text-white">
        {number}
      </div>

      <div className="mt-1 text-sm text-slate-500">
        {label}
      </div>

    </div>
  );
}

function Category({ icon, title, courses }) {
  return (
    <Link
      to="/courses"
      className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]"
    >

      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
        {icon}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {courses}
      </p>

      <div className="mt-5 text-sm text-violet-400 opacity-0 transition group-hover:opacity-100">
        Explore →
      </div>

    </Link>
  );
}